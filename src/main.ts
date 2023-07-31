import { RabbitMQReceiver, TConsumer } from "./infra/rabbitmq/receiver.js";
import { ScrapyLastExecution, PromoThunderQueries } from './infra/postgres/queries/queries.js'
import pLimit from 'p-limit';
import { ScreenshotService } from "./services/screenshot-service.js";

/**
 * Function that handles messages received
 */
const messageHandler: TConsumer = (channel) => {
  return async (message) => {
    if (message) {
      console.log(`Message Received: ${message}`);
      await main()
      channel.ack(message);
      console.log("Waiting for new messages...");
    }
  };
};

/**
 * Funcion reponsable for generate screenshots
 */
async function main(): Promise<void> {
  const datetime = await ScrapyLastExecution.getDatetime()
  const products = await PromoThunderQueries.getProducts(datetime)
  
  const limit = pLimit(3)

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
