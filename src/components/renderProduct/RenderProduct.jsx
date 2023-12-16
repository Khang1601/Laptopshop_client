import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { receiptAction } from '../../store/slices/receipt.slice'
import './renderproduct.scss'
import MeoMeoJs from '@mieuteacher/meomeojs'
import { Button, Modal, message } from 'antd';


import Hero from '../disc/hero/Hero'
import Disc from '../disc/Disc'
import Product from '../../pages/product/Product'
import Offer from '../../pages/offers/Offer'


export default function RenderProduct() {

    const dispatch = useDispatch()
    const { productStore, userStore, receiptStore } = useSelector(store => store)

    useEffect(() => {
        console.log("receiptStore", receiptStore)
    }, [receiptStore])

    const handleAddToCart = (productId) => {
        axios.post(`http://127.0.0.1:3000/apis/v1/receipts/${userStore.data.id}/${productId}`)
            .then(res => {
                if (res.status == 200) {
                    // thanh cong
                    // console.log("res", res.data.data)
                    dispatch(receiptAction.setCart(res.data.data))
                } else {
                    // that bai vi loi code
                }
            })
            .catch(err => {
                // sap server 
            })
    }


    //================mess mua thành công
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Đã mua sản phẩm thành công!',
      });
    };

    //==============Các useState
    const [searchQuery, setSearchQuery] = useState(''); // search input state
    
    const [sortOrder, setSortOrder] = useState(null); // sort state

    //==============Các function
    // Function handle search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

        // Function toggle sort order
        const toggleSortOrder = () => {
            setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
        };

    return (
        <div className='render_page'>
            <Hero></Hero>
            <Disc></Disc>



            {/* <Product></Product> */}

            {/* <div className='render_page_sort'>
                <h3>Sắp xếp theo</h3>

                <div className='sort_btns'>

                    <button onClick={toggleSortOrder}>
                        <ion-icon name="funnel"></ion-icon>
                        <span>Sort Price: {sortOrder === 'ascending' ? 'Tăng dần' : 'Giảm dần'}</span>

                    </button>

                    <button>
                        <ion-icon name="bonfire"></ion-icon>
                        <span>Khuyến mãi hot</span>
                    </button>

                    <button>
                        <ion-icon name="eye"></ion-icon>
                        <span>Xem nhiều</span>
                    </button>

                    <button onClick={clearFilters}>
                        <ion-icon name="close"></ion-icon>
                        <span>Xóa bộ lọc</span>
                    </button>
                </div>
            </div> */}

            {/* <div className='render_page_input'>
                    <h3>Tìm kiếm</h3>
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo price, name, brand, color và category"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div> */}


            <div className="render_page_productlist container-fluid bg-trasparent my-4 p-3"

                style={{ position: "relative" }}
            >
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3" >

                    {
                        productStore.data
                        // ?.sort((a, b) => {
                        //     if (sortOrder === 'ascending') {
                        //         return a.price - b.price;           //tăng dần
                        //     } else if (sortOrder === 'descending') {
                        //         return b.price - a.price;           //giảm dần
                        //     } else {
                        //         return 0; //ko sắp xếp thứ tự, giữ nguyên thứ tự ban đầu
                        //     }
                        // })
                        // ?.sort((a, b) => {
                        //     // Sorting based on product price, you can modify this logic for other criteria
                        //     const priceA = a.price;
                        //     const priceB = b.price;
                  
                        //     if (sortOrder === 'asc') {
                        //       return priceA - priceB;
                        //     } else {
                        //       return priceB - priceA;
                        //     }
                        //   })
                        ?.map((product, index) => {
                            return (


                                <div className="col hp" key={MeoMeoJs.randomId()}>


                                    <div className="card h-100 shadow-sm">
                                        <a target="_blank" href="#">
                                            <img
                                                src={product.avatar}
                                                className="card-img-top"
                                                alt="product.title"
                                            />
                                        </a>

                                        <div className="label-top shadow-sm" >
                                            <a
                                                className="text-white"
                                                target="_blank"
                                                href="#"
                                            >
                                                {product.brand}
                                            </a>


                                        </div>


                                        <div className="card-body">
                                            <div className="clearfix mb-3">
                                                <span className="float-start badge rounded-pill bg-success">
                                                    {MeoMeoJs.convertToVND(product.price)}
                                                </span>
                                                <span className="float-end">
                                                    <a
                                                        href="#"
                                                        className="small text-muted text-uppercase aff-link"
                                                    >
                                                        reviews
                                                    </a>
                                                </span>
                                            </div>
                                            <h5 className="card-title">
                                                <a target="_blank" href="#">
                                                    Tên sản phẩm: {product.name}
                                                    <br />
                                                    Dòng: {product.type}
                                                    , Màu: {product.color}

                                                </a>

                                            </h5>
                                            <div className="d-grid gap-2 my-4">
                                                <button href="#" className="btn btn-warning bold-btn"
                                                    onClick={async () => {
                                                        // dispatch(userAction.addToCart(product))

                                                        handleAddToCart(product.id)

                                                        message.success('Thêm vào giỏ hàng thành công!');

                                                    }}
                                                >
                                                    add to cart
                                                </button>
                                            </div>
                                            <div className="clearfix mb-1">
                                                <span className="float-start">
                                                    <a href="#">
                                                        <i className="fas fa-question-circle" />
                                                    </a>
                                                </span>
                                                <span className="float-end">
                                                    <i className="far fa-heart" style={{ cursor: "pointer" }} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>




                            )
                        })
                    }


                </div>

            </div>



                <Offer></Offer>
        </div>
    )
}
