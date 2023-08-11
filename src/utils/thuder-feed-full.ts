import pLimit from "p-limit";
import { PostgresRepository } from "../infra/postgres/postgres-repository.js";
import { ThunderFeedFullTemplate } from "../templaters/thunder/feed/thunder-feed-full-template.js";
import { Screenshot } from "../screenshoter/screenshot.js";
import { THUNDER_SCREENSHOTS_FOLDER } from "../settings.js";

export async function thunderFeedFull(query: string): Promise<void> {
  const limit = pLimit(3);

  let promises: Promise<void>[] = [];

  const thunderProducts = await PostgresRepository.loadProducts(query);
  for (const product of thunderProducts) {
    const template = ThunderFeedFullTemplate.generate(product);
    promises.push(
      limit(() =>
        Screenshot.take(template, THUNDER_SCREENSHOTS_FOLDER, {width: 1080, height: 1080}, product)
      ),
    );
  }

  await Promise.all(promises);
}