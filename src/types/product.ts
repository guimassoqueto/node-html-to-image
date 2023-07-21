import { ProductModel } from "../domain/models/product-model.js";

export type Product = Pick<
  ProductModel, 
  "id" | "title" | "image_url" | "free_shipping" | "price" | "previous_price"  | "discount" >