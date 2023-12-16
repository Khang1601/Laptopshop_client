import React from 'react'
import axios from 'axios'

import MeoMeoJs from '@mieuteacher/meomeojs'
import { Button, Modal, Space } from 'antd';

import { useSelector, useDispatch } from 'react-redux'

import './cart.scss'





export default function Cart() {
    const dispatch = useDispatch()
    const { receiptStore } = useSelector(state => state)

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


    // const totalAmount = receiptStore?.cart.receipt_details?.reduce((accumulator, item) => {
    //     const itemPrice = item.product.price * item.quantity;
    //     return accumulator + itemPrice;
    // }, 0);


    //---------tính tổng tiền
    
        
        const  totalAmount =   receiptStore.cart?.receipt_details?.reduce((accumulator, item, index) => {

                const itemPrice = item.product.price * item.quantity;

                return accumulator + itemPrice;


            }, 0);
        
    

    return (
        <div className='cart_page'>
            <h2>Trang Cart</h2>



            <table className="table">
                <thead className="thead-dark">
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hãng</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá tiền</th>
                        <th scope="col">Xóa sản phẩm</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        receiptStore.cart?.receipt_details?.map((item, index) => {
                            return (
                                <tr key={Date.now() * Math.random()}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img src={item.avatar} alt="" width={100} />
                                    </td>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.brand}</td>

                                    <td>
                                        {MeoMeoJs.convertToVND(item.product.price)}
                                    </td>

                                    <td>
                                        {/* <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                            min={1} onChange={(e) => {
                                                dispatch(userAction.changeQuantity({
                                                    id: item.id,
                                                    quantity: Number(e.target.value)
                                                }))
                                            }} type="number" defaultValue={item.quantity} /> */}

                                        <input onChange={(e) => {
                                            handleUpdateItemCart(item.id, Number(e.target.value))
                                        }} type="number" min={1}
                                            defaultValue={item.quantity} />

                                    </td>


                                    <td>{MeoMeoJs.convertToVND(item.product.price * item.quantity)}</td>

                                    <td>
                                        {/* <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => {
                                                Modal.confirm({
                                                    content: "Bạn muốn xóa sản phẩm khỏi Cart?",
                                                    onOk: () => {
                                                        dispatch(userAction.deleteFromCart(item.id));

                                                    }
                                                })
                                            }}
                                        >Delete</button> */}

                                        <button className='btn btn-danger'
                                            onClick={() => {
                                                Modal.confirm({
                                                    content: "Bạn muốn xóa sản phẩm khỏi Cart?",
                                                    onOk: () => {
                                                        handleDeleteItemCart(item.id)
                                                        window.location.reload();

                                                    }
                                                })

                                                // handleDeleteItemCart(item.id)
                                            }}>Delete</button>
                                    </td>

                                </tr>


                            )
                        })
                    }



                    <tr className='cart_total'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <p>
                                Tổng cộng:
                                <br />
               
                                { MeoMeoJs.convertToVND( totalAmount? totalAmount : 0 ) }

                            </p>
                        </td>

                        <td>

                            <button onClick={() => {

                                Modal.confirm({
                                    content: "Bạn muốn thanh toán?",
                                    onOk: () => {
                                        handlePurchase();
                                        window.location.reload();

                                    }
                                })


                                // handlePurchase();
                            }} className='btn btn-success'>Checkout</button>



                            {/* <button onClick={() => {
                                let newReceipts = {
                                    id: Date.now() * Math.random(),
                                    total: userStore.cart.reduce((total, item) => {
                                        return total + (item.price * item.quantity)
                                    }, 0),
                                    products: [...userStore.cart]
                                }
                                dispatch(userAction.addNewReceipt(newReceipts))
                            }} className='btn btn-success'>Checkout</button> */}

                        </td>
                    </tr>


                </tbody>


            </table>






        </div>
    )
}