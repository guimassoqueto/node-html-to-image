import { RabbitMQReceiver, TConsumer } from "./infra/rabbitmq/receiver.js";
import { basicQuery, basicQuery2 } from './infra/postgres/queries/basic-query.js'
import { pool } from './infra/postgres/pool.js'
import { QueryProductFormater } from "./helpers/query-product-formater.js";
import pLimit from 'p-limit';
import { ScreenshotService } from "./services/screenshot-service.js";


const messageHandler: TConsumer = (channel) => {
  return async (message) => {
    if (message) {
      const timestamp = message.content.toString();
      console.log(`Timestamp received: ${timestamp}`);
      
      await main(timestamp)

      channel.ack(message);
      console.log("Waiting for new messages...");
    }
  };
};


async function main(timestamp: string): Promise<void> {
  const queryResult = await pool.query(basicQuery2(timestamp))
  const products = QueryProductFormater.format(queryResult)
  const limit = pLimit(5)

  const promises: Promise<void>[] = []
  for (const product of products) {
    promises.push(
      limit(() => ScreenshotService.takeShot(product))
    )
  }
  await Promise.all(promises)
}


try {
  console.log("Waiting for new messages...");
  await RabbitMQReceiver.receiver(messageHandler);
} catch (error) {
  console.error(error);
}
