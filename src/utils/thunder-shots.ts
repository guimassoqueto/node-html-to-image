import pLimit from "p-limit";
import { PostgresRepository } from "../infra/postgres/postgres-repository.js";
import { ThunderTemplater } from "../templaters/thunder/thunder.js";
import { Screenshot } from "../screenshoter/screenshot.js";
import { THUNDER_SCREENSHOTS_FOLDER } from "../settings.js";
import { thunderQuery } from "../infra/postgres/queries/queries.js";


export default async function thunderShots(): Promise<void> {
  const limit = pLimit(3);

  let promises: Promise<void>[] = [];

  const thunderProducts = await PostgresRepository.loadProducts(thunderQuery);
  for (const product of thunderProducts) {
    const template = ThunderTemplater.generate(product);
    promises.push(
      limit(() =>
        Screenshot.take(product, template, THUNDER_SCREENSHOTS_FOLDER)
      ),
    );
  }

  await Promise.all(promises);
}