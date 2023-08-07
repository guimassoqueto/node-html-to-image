import client, { Channel, Connection, ConsumeMessage } from "amqplib";
import { RABBITMQ_RECEIVE_QUEUE, RABBITMQ_URL } from "../../settings.js";

export type Consumer = (
  channel: Channel,
) => (message: ConsumeMessage | null) => Promise<void>;

export class RabbitMQReceiver {
  static async receiver(message_handler: Consumer) {
    const connection: Connection = await client.connect(RABBITMQ_URL);
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue(RABBITMQ_RECEIVE_QUEUE, { durable: false });
    await channel.consume(RABBITMQ_RECEIVE_QUEUE, message_handler(channel), {
      noAck: false,
    });
  }
}
