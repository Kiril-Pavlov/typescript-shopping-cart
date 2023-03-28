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
            "name": "Product One",
            "price": 9.99,
            "imgUrl": "image url",
            "description": "description"
        }
]