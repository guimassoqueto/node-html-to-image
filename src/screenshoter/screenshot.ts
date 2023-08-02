import puppeteer from "puppeteer";
import { ProductModel } from "../domain/models/product-model.js";

export class Screenshot {
  static async take(
    product: ProductModel,
    template: string,
    savePath: string,
  ): Promise<void> {
    const pageHTML = template;
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1920 });
    await page.setContent(pageHTML, { waitUntil: "networkidle2" });
    await page.screenshot({
      path: `${savePath}/${product.id.slice(-10)}.webp`,
      type: "webp",
      quality: 100,
    });
    await browser.close();
  }
}
