import { createContext, ReactElement, useState } from "react"

export type ProductType={
    key: string,
    name: string,
    price: number,
    imgUrl: string,
    description: string
}

const initialState:ProductType[] = [
        {
            "key": "item0001",
            "name": "Laptop 1",
            "price": 599.99,
            "imgUrl": "image url",
            "description": "description"
        }
]

export type UseProductsContextType = {products: ProductType[]}

const initContextState: UseProductsContextType = {products:[]}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({children}:ChildrenType):ReactElement=>{
    const [products, setProducts] = useState<ProductType[]>(initialState)
    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext