import { Consumer, RabbitMQReceiver } from "./infra/rabbitmq/receiver.js";
import fofinhoShots from "./utils/fofinho-shots.js";
import thunderShots from "./utils/thunder-shots.js";

const messageHandler: Consumer = (channel) => {
  return async (message) => {
    if (message) {
      console.log(`Message Received: ${message}`)
      await takeShots()
      channel.ack(message);
      console.log("Waiting for new messages...")
    }
  }
}

async function takeShots(): Promise<void> {
  await fofinhoShots()
  await thunderShots()
}

try {
  console.log("Waiting for new messages...")
  await RabbitMQReceiver.receiver(messageHandler)
} catch (error) {
  console.error(error)
}
