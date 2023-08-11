import { queryByAmazonIds } from "./infra/postgres/queries/queries.js";
import { Consumer, RabbitMQReceiver } from "./infra/rabbitmq/receiver.js";
import { kadecStory } from "./utils/kadec-story.js";
import { thunderFeedFull } from "./utils/thuder-feed-full.js";
import { thunderFeedQuarter } from "./utils/thuder-feed-quarter.js";
import { thuderStory } from "./utils/thunder-story.js";

type messageType = string[] | null;

type JsonMessage = {
  k?: messageType // k = kadec
  ts?: messageType, // ts = thunder story
  tfq?: messageType, // tfq = thunder feed quarter
  tff?: messageType // thunder feed full
}

const messageHandler: Consumer = (channel) => {
  return async (message) => {
    if (message) {
      console.log(`Message Received`)
      const jsonMessage = JSON.parse(message.content.toString()) as JsonMessage

      await takeShots(jsonMessage)

      channel.ack(message);
      console.log("Waiting for new messages...")
    }
  }
}

async function takeShots(jsonMessage: JsonMessage): Promise<void> {
  if (jsonMessage.k) await kadecStory(queryByAmazonIds(jsonMessage.k))

  if (jsonMessage.ts) await thuderStory(queryByAmazonIds(jsonMessage.ts))
  if (jsonMessage.tfq) await thunderFeedQuarter(queryByAmazonIds(jsonMessage.tfq))
  if (jsonMessage.tff) await thunderFeedFull(queryByAmazonIds(jsonMessage.tff))
}

try {
  console.log("Waiting for new messages...")
  await RabbitMQReceiver.receiver(messageHandler)
} catch (error) {
  console.error(error)
}
