import { ProductModel } from '../domain/models/product.js'

export type Product = Pick<ProductModel, 'id' | 'title' | 'discount' | 'is_prime' | 'price'>