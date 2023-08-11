import pLimit from "p-limit";
import { PostgresRepository } from "../infra/postgres/postgres-repository.js";
import { Screenshot } from "../screenshoter/screenshot.js";
import { KADEC_SCREENSHOTS_FOLDER } from "../settings.js";
import { KadecTemplater } from "../templaters/kadec/kadec.js";


export async function kadecStory(query: string): Promise<void> {
  const limit = pLimit(3);

  let promises: Promise<void>[] = [];

  const thunderProducts = await PostgresRepository.loadProducts(query);
  for (const product of thunderProducts) {
    const template = KadecTemplater.generate(product);
    promises.push(
      limit(() =>
        Screenshot.take(template, KADEC_SCREENSHOTS_FOLDER, {width: 1080, height: 1920}, product)
      ),
    );
  }

  await Promise.all(promises);
}