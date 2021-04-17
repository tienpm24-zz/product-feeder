import { Product, Currency } from "./types"

export const formatProducts = (products: any[]):Product[] => {
  return products.map(({itemId, title, sellingStatus, viewItemURL, galleryURL, primaryCategory}) => ({
    id: itemId[0],
    name: title[0],
    price: parseFloat(sellingStatus[0].convertedCurrentPrice[0].__value__).toFixed(2),
    viewItemURL: viewItemURL[0],
    picture: galleryURL?galleryURL[0]:null,
    category: primaryCategory[0].categoryName[0],
    // @ts-ignore
    currency: Currency[sellingStatus[0].convertedCurrentPrice[0]['@currencyId']]
  }))
}