import { queryByAmazonIds } from "./infra/postgres/queries/queries.js";
import { Consumer, RabbitMQReceiver } from "./infra/rabbitmq/receiver.js";
import kadecShots from "./utils/kadec-shots.js";
import thunderShots from "./utils/thunder-shots.js";

type JsonMessage = {
  kadec?: string[]
  thunder?: string[]
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
  if (jsonMessage.kadec) await kadecShots(queryByAmazonIds(jsonMessage.kadec))
  if (jsonMessage.thunder) await thunderShots(queryByAmazonIds(jsonMessage.thunder))
}

try {
  console.log("Waiting for new messages...")
  await RabbitMQReceiver.receiver(messageHandler)
} catch (error) {
  console.error(error)
}
