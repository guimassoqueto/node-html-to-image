import pLimit from "p-limit";
import { PostgresRepository } from "../infra/postgres/postgres-repository.js";
import { fofinhoQuery } from "../infra/postgres/queries/queries.js";
import { Screenshot } from "../screenshoter/screenshot.js";
import { FOFINHO_SCREENSHOTS_FOLDER } from "../settings.js";
import { FofinhoTemplater } from "../templaters/fofinho/fofinho.js";


export default async function fofinhoShots(): Promise<void> {
  const limit = pLimit(3);

  let promises: Promise<void>[] = [];

  const fofinhoProducts = await PostgresRepository.loadProducts(fofinhoQuery);
  for (const product of fofinhoProducts) {
    const template = FofinhoTemplater.generate(product);
    promises.push(
      limit(() =>
        Screenshot.take(product, template, FOFINHO_SCREENSHOTS_FOLDER)
      ),
    );
  }

  await Promise.all(promises)
}