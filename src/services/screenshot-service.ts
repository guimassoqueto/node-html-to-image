import puppeteer from "puppeteer";
import { createHTMLString } from "../helpers/create-html-string.js";
import { SCREENSHOTS_FOLDER } from "../settings.js";
import { Product } from "../types/product.js";

export class ScreenshotService {
  static async takeShot(product: Product): Promise<void> {
    const pageHTML = await createHTMLString(product)
    const browser = await puppeteer.launch({ headless: "new" })
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1920 })
    await page.setContent(pageHTML, { waitUntil: 'networkidle2' })
    await page.screenshot({
      path: `${SCREENSHOTS_FOLDER}/${product.id.slice(-10)}.webp`,
      type: "webp",
      quality: 100,
    });
    await browser.close()
  }
}
