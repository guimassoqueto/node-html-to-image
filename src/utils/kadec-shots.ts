import pLimit from "p-limit";
import { PostgresRepository } from "../infra/postgres/postgres-repository.js";
import { Screenshot } from "../screenshoter/screenshot.js";
import { KADEC_SCREENSHOTS_FOLDER } from "../settings.js";
import { KadecTemplater } from "../templaters/kadec/kadec.js";


export default async function thunderShots(query: string): Promise<void> {
  const limit = pLimit(3);

  let promises: Promise<void>[] = [];

  const thunderProducts = await PostgresRepository.loadProducts(query);
  for (const product of thunderProducts) {
    const template = KadecTemplater.generate(product);
    promises.push(
      limit(() =>
        Screenshot.take(product, template, KADEC_SCREENSHOTS_FOLDER)
      ),
    );
  }

  await Promise.all(promises);
}