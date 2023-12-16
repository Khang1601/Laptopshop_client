import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { receiptAction } from '../../store/slices/receipt.slice'

export default function Cart() {
    const dispatch = useDispatch()
    const {receiptStore} = useSelector(state => state)

    const handleUpdateItemCart = (itemId, newQuantity) => {
        axios.post(`http://127.0.0.1:3000/apis/v1/receipts/updateItemCart/${itemId}/${newQuantity}`)
        .then(res => {
            console.log("res", res.data)
            dispatch(receiptAction.setCart(res.data.data))
        })
        .catch(err => {
            console.log("loi", err)
        }) 
    }

    const handleDeleteItemCart = (itemId) => {
        axios.delete(`http://127.0.0.1:3000/apis/v1/receipts/${receiptStore.cart?.id}/${itemId}`)
        .then(res => {
            console.log("res", res.data)
            dispatch(receiptAction.setCart(res.data.data))
        })
        .catch(err => {
            console.log("loi", err)
        }) 
    }

    const handlePurchase = () => {
        axios.patch(`http://127.0.0.1:3000/apis/v1/receipts/purchase/${receiptStore.cart?.id}/${receiptStore.cart?.receipt_details?.reduce((result, cur) => {
            return result + (cur.quantity * cur.product.price)
        }, 0)}`)
        .then(res => {
            console.log("res", res.data)
            dispatch(receiptAction.setCart(null))
            dispatch(receiptAction.setReceipt([res.data.data, receiptStore.receipt]))
        })
        .catch(err => {
            console.log("loi", err)
        })
    }
  return (
    <div>
        <h2>Cart</h2>
        <ul>
            {
                receiptStore.cart?.receipt_details?.map((item, index) => {
                    return (
                        <li key={Date.now() * Math.random()}>STT: {index + 1} Name: {item.product.name} Quantity: 
                        
                        <input onChange={(e) => {
                            handleUpdateItemCart(item.id, Number(e.target.value))
                        }} type="number" min={1} 
                        defaultValue={item.quantity}/>
                        
                        Price {item.product.price}

                        <button className='btn btn-danger' onClick={() => {
                            handleDeleteItemCart(item.id)
                        }}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
        <button onClick={() => {
            handlePurchase();
        }}>Thanh Toan</button>
    </div>
  )
}
