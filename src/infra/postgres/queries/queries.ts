import { POSTGRES_PRODUCTS_TABLE } from "../../../settings.js"

export const kadecQuery = `
  SELECT * FROM items WHERE 
  category ILIKE ANY (ARRAY['%casa%', '%cozinha%','%jardim%', '%decora%', '%limpeza%', '%beleza%', '%doméstic%']) AND 
  reviews >= 300 AND 
  discount >= 10
`

export const fofinhoQuery = `
  SELECT * FROM ${POSTGRES_PRODUCTS_TABLE} 
  WHERE category ILIKE '%pet shop%' AND 
  title ilike ANY (
    ARRAY['%pulga%', '%ração%','%tapete%', '%higien%', '%areia%','%shampoo%']
  ) AND
  discount > 0;
`

export const thunderQuery = `
WITH pt AS (
    SELECT *
    FROM items WHERE category ILIKE ANY (ARRAY['%saúde%', '%eletrônico%', '%cozinha%', '%alimentos%', '%automotivo%', '%casa%', '%jardim%', '%limpeza%', '%informática%', '%doméstic%'])
    AND reviews > 500
    AND discount >= 20
    UNION
    SELECT *
    FROM items  WHERE category ILIKE ANY (ARRAY['%beleza%', '%bebê%', '%higiene%'])
    AND reviews > 500
    AND discount >= 10
    UNION
    SELECT * FROM items WHERE title ILIKE ANY (ARRAY['%nintendo%', '%toshiba%', '%huawei%', '%xiaomi%', '%dell%', '%microsoft%', '%philips%', '% hp %', '% LG %', '%panasonic%', '%sony%', '% apple%', '%samsung%'])
	  AND discount > 20 AND reviews > 50
    UNION
	  SELECT *
    FROM items  WHERE category = ''
    AND reviews > 500
    AND discount >= 10
  )
  SELECT * FROM pt WHERE 
  category NOT ILIKE '%moda%'
`
