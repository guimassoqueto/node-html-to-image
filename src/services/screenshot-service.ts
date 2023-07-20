import { writeFile } from "fs/promises";
import puppeteer from "puppeteer";
import { ProductModel } from "../domain/models/product.js";
import { formatHTML } from "../helpers/format-html.js";
import { SCREENSHOTS_FOLDER, TEMP_FOLDER } from "../settings.js";

export class ScreenshotService {
  static async takeShot(product: ProductModel): Promise<void> {
    const filePath = `file://${TEMP_FOLDER}/${product.id}.html`;
    await writeFile(`${TEMP_FOLDER}/${product.id}.html`, formatHTML(product));

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1920 });
    await page.goto(filePath);
    await page.screenshot({
      path: `${SCREENSHOTS_FOLDER}/${product.id}.webp`,
      type: "webp",
      quality: 100,
    });
    await browser.close();
  }
}
