import React from 'react'
import { useSelector } from 'react-redux'
import MeoMeoJs from '@mieuteacher/meomeojs'

// import { useDispatch } from 'react-redux'
// import { userAction } from '../../store/slices/user.slice'
import { useDispatch } from 'react-redux';
import { receiptAction } from '../../store/slices/receipt.slice';

import { Button, Modal } from 'antd';


import './receipt.scss'

export default function Receipt() {



  const dispatch = useDispatch()
 

    /*
    const userStore = useSelector(store => store.userStore)
    console.log("userStore ở receipt", userStore);

    //============
    const dispatch = useDispatch(); // dùng useDispatch để gửi action
    const handleDeleteReceipt = (index) => {
        // dùng action "deleteReceipt" để xóa đơn hàng tại index
    }
    */

    const {receiptStore} = useSelector(state => state);


    return (
        <div className='receipt_page'>
            <h2>Trang Receipt</h2>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Receipt ID</th>

                        {/* <th scope="col">Purchased Products</th> */}
                        {/* <th scope="col">User Email</th> */}

                        <th scope="col">Purchased Products</th>

                        <th scope="col">Total Cost</th>

                        <th scope="col">Tools</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        // userStore.receipts.map((item, index) => (
                        receiptStore.receipt?.map((item, index) => {

                            return (

                            <tr key={item.id}>

                                <th scope="row">{index+1}</th>
                                <td>{item.id}</td>

                                {/* <td>{item.user.email}</td> */}

                                <td >{item.receipt_details.map((item2) => {
                                    return(
                                        <div key={Date.now()*Math.random()}> {
                                            // item2.quantity + item2.product.name + item2.product.brand
                                            
                                            <span>
                                                <img src={item2.product.avatar} alt="" style={{borderRadius: '50%' , height: '40px', width: '40px'}}/> 
                                                {item2.product.name + '(x' + item2.quantity  + ') = ' + MeoMeoJs.convertToVND(item2.quantity*item2.product.price)}
                                            </span>
                                            

                                        }</div>
                                    )
                                    
                                   
                                })}</td>
                    

                                <td>{MeoMeoJs.convertToVND(item.total)}</td>

                                <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger"
                                        onClick={() => 
                                            Modal.confirm({
                                                content: "Bạn muốn xóa sản phẩm khỏi Receipt?",
                                                onOk: () => {
                                                    // dispatch(userAction.deleteFromCart(item.id));
                                                    dispatch(receiptAction.deleteReceipt(item.id));


                                                }
                                            })
                                            // handleDeleteReceipt(index)
                                        }

                                    >Delete</button>
                                </td>
                            </tr>
                        )})
                    }

                </tbody>
            </table>


        </div>
    )
}