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