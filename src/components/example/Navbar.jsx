import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const {receiptStore} = useSelector(state => state);
  return (
    <div>Navbar Cart {receiptStore.cart?.receipt_details?.reduce((result, cur) => {
        return result + cur.quantity
    }, 0)} {receiptStore.cart == null && 0}</div>
  )
}
