import { createContext, ReactElement, useState, useEffect } from "react"

export type ProductType={
    key: string,
    name: string,
    price: number,
    imgUrl: string,
    description: string
}



const initialState:ProductType[] = []

export type UseProductsContextType = {products: ProductType[]}

const initContextState: UseProductsContextType = {products:[]}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({children}:ChildrenType):ReactElement=>{
    const [products, setProducts] = useState<ProductType[]>(initialState)

    useEffect(()=>{
        const fetchProducts = async ():Promise<ProductType[]> => {
            const data =await fetch('http:localhost:3500/products').then(res =>{
                return res.json()
            }).catch(err=>{
                if(err instanceof Error) console.log(err.message)
            })
            return data

            fetchProducts().then(products => setProducts(products))
        }
    },[])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext