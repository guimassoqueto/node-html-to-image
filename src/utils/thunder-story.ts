import pLimit from "p-limit";
import { PostgresRepository } from "../infra/postgres/postgres-repository.js";
import { ThunderStoryTemplate } from "../templaters/thunder/stories/thunder-story-template.js";
import { Screenshot } from "../screenshoter/screenshot.js";
import { THUNDER_SCREENSHOTS_FOLDER } from "../settings.js";

export async function thuderStory(query: string): Promise<void> {
  const limit = pLimit(3);

  let promises: Promise<void>[] = [];

  const thunderProducts = await PostgresRepository.loadProducts(query);
  for (const product of thunderProducts) {
    const template = ThunderStoryTemplate.generate(product);
    promises.push(
      limit(() =>
        Screenshot.take(template, THUNDER_SCREENSHOTS_FOLDER, {width: 1080, height: 1920}, product)
      ),
    );
  }

  await Promise.all(promises);
}
