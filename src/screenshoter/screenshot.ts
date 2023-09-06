import puppeteer from "puppeteer";
import { ProductModel } from "../domain/models/product-model.js";

type viewport = {
  width: number,
  height: number
}

export class Screenshot {
  static async take(
    template: string,
    savePath: string,
    options: viewport,
    product?: ProductModel,
  ): Promise<void> {
    const pageHTML = template;
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    let filename = new Date().getMilliseconds().toString();
    if(product) {
      filename = btoa(encodeURIComponent(product.product_url)) 
    }
    
    await page.setViewport(options);
    await page.setContent(pageHTML, { waitUntil: "networkidle2" });
    await page.screenshot({
      path: `${savePath}/${filename}.webp`,
      type: "webp",
      quality: 100,
    });
    await browser.close();
  }
}
