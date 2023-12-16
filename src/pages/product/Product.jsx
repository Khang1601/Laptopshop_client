import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { receiptAction } from '../../store/slices/receipt.slice'
import Cart from '../../components/example/Cart'
import Receipt from '../../components/example/Receipt'

export default function Product() {
    const dispatch = useDispatch()
    const {productStore, userStore, receiptStore} = useSelector(store => store)

    useEffect(() => {
        console.log("receiptStore", receiptStore)
    }, [receiptStore])

    const handleAddToCart = (productId) => {
        axios.post(`http://127.0.0.1:3000/apis/v1/receipts/${userStore.data.id}/${productId}`)
        .then(res => {
            if(res.status == 200) {
                // thanh cong
                // console.log("res", res.data.data)
                dispatch(receiptAction.setCart(res.data.data))
            }else {
                // that bai vi loi code
            }
        })
        .catch(err => {
            // sap server 
        })
    }
    
  return (
    <div>
        <h1>User Login: {userStore.data?.email}</h1>
        {/* <h1>IP: {userStore.data?.ipaddress1}</h1> */}
        <h2>Product</h2>
        <div>
            <ul>
                {
                    productStore.data?.map((product, index) => <li key={product.id}> {product.name} : {product.price} <button onClick={() => {
                        handleAddToCart(product.id)
                    }}>Buy</button></li>)
                }
            </ul>
        </div>
        <div>
            <Cart/>
        </div>
        <div>
            Receipt
            <Receipt/>
        </div>
    </div>
  )
}
