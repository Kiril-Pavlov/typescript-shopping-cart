import React from 'react'

export type CartItemType={
    key: string,
    name: string,
    price: number,
    imgUrl: string,
    description: string,
    quantity:number
}

type CartStateType = {cart: CartItemType[]}

const CartProvider = () => {
  return (
    <div>CartProvider</div>
  )
}

export default CartProvider