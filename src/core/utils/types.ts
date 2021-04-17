export enum Currency {
  EUR = '€',
  USD = '$'
}

export type Product = {
  id: string
  name: string,
  price: string,
  viewItemURL?: string,
  currency: Currency,
  category?: string,
  picture?: string 
}