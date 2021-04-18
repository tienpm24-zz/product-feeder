import { createContext } from "react"
import { Product } from "../../utils/types"

type ProductSearchProps = { 
  products: Product[], 
  searchText: string, 
  setSearchtext: (value: string) => void,
  isLoading: boolean,
  errorMessage: string
}

export const ProductSearchContext = createContext<Partial<ProductSearchProps>>({})
