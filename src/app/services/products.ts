import { formatProducts } from "../utils/helper"
import { Product } from "../utils/types"


export const searchProducts = async (
  text: string,
  abortSignal?: AbortSignal
): Promise<Product[]> => {
  const result = await fetch(
    `https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&RESPONSE-DATA-FORMAT=JSON&keywords=${encodeURIComponent(text)}`,
    {
      signal: abortSignal,
    }
  )
  if (result.status !== 200) {
    throw new Error('bad status = ' + result.status)
  }
  const json = await result.json()
  const products = json.findItemsByKeywordsResponse[0].searchResult[0]?.item || [] 
  return formatProducts(products)
}
