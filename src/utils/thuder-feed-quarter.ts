import pLimit from "p-limit";
import { PostgresRepository } from "../infra/postgres/postgres-repository.js";
import { ThunderFeedQuarterTemplate } from "../templaters/thunder/feed/thunder-feed-quarter-template.js";
import { Screenshot } from "../screenshoter/screenshot.js";
import { THUNDER_SCREENSHOTS_FOLDER } from "../settings.js";

export async function thunderFeedQuarter(query: string): Promise<void> {
  const limit = pLimit(3);

  let promises: Promise<void>[] = [];

  const products = await PostgresRepository.loadProducts(query);
  const template = ThunderFeedQuarterTemplate.generate(products);

  promises.push(
    limit(() =>
      Screenshot.take(template, THUNDER_SCREENSHOTS_FOLDER, {width: 1080, height: 1080})
    ),
  );

  await Promise.all(promises);
}