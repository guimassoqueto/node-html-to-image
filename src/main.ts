import { RabbitMQReceiver, TConsumer } from "./infra/rabbitmq/receiver.js";


const message_handler: TConsumer = (channel) => {
  return async (message) => {
    if (message) {
      const timestamp = message.content.toString();
      console.log(`Timestamp received: ${timestamp}`);
      channel.ack(message);
      console.log("Waiting for new messages...");
    }
  };
};

try {
  console.log("Waiting for new messages...");
  await RabbitMQReceiver.receiver(message_handler);
} catch (error) {
  console.error(error);
}
