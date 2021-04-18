export enum Currency {
  EUR = '€',
  USD = '$'
}

export type Product = {
  id: string
  name: string,
  price: number,
  viewItemURL?: string,
  currency: Currency,
  category?: string,
  picture?: string 
}