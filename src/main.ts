import { writeFile } from "fs/promises";
import puppeteer from 'puppeteer';
import { formatHTML, Product } from "./html.js";

const product: Product = {
  id: "XYZZZ",
  title: "Apple iPhone 14 (128 GB) – Roxo",
  imageUrl: "https://m.media-amazon.com/images/I/41Z8j2+aznL._AC_SL1000_.jpg",
  priceOld: "7599.90",
  priceNew: "5499.00",
  priceDiscount: "28",
  acceptInstallments: true,
  freeShipping: true
}

const filePath = `file:///home/gmassoqueto/github-repos/node-html-to-image/${product.id}.html`
await writeFile(`${product.id}.html`, formatHTML(product))

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setViewport({
  width: 1080,
  height: 1920,
  deviceScaleFactor: 2,
});
await page.goto(filePath)
await page.screenshot({ path: 'screenshot.webp', type: 'webp', quality: 100 })
await browser.close()
