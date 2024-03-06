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


    //-----------6/3/2024

    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    // const [sortOrder, setSortOrder] = useState(null); // sort state

    // const [searchQuery, setSearchQuery] = useState(''); // search input state

    const [currentPage, setCurrentPage] = useState(1); // currentPage state

    const productsPerPage = 8; // products trên 1 page

    // Function reset filters
    const clearFilters = () => {
        setSelectedBrand(null);
        setSelectedCategory(null);
        setSelectedColor(null);
        setSortOrder(null);
        setSearchQuery('');

        setCurrentPage(1); // Reset current page về 1
    };

    // // Function toggle sort order
    // const toggleSortOrder = () => {
    //     setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
    // };

    // // Function handle search input change
    // const handleSearchInputChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    // Function handle pagination page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the index range for the products to display on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;




    return (
        <div className='render_page'>
            <Hero></Hero>
            <Disc></Disc>


            {/* ----- */}
            {/* <Product></Product> 

            <div className='render_page_sort'>
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
            </div> 

            <div className='render_page_input'>
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



            {/* -6/3/2024- */}
            <div className='render_page_brand' id='render_page_brand'>

                {/* <h3>Thương hiệu</h3> */}

                <div className='brand_img'>
                    <img src="https://ttcenter.com.vn/uploads/product_menu/asus-1679907529.png"
                        alt=""
                        width={150}
                        onClick={() => { setSelectedBrand('ASUS'); setSelectedCategory(null); }}
                    />

                    <img src="https://ttcenter.com.vn/uploads/product_menu/msi-1679907581.png"
                        alt=""
                        width={150}
                        onClick={() => { setSelectedBrand('MSI'); setSelectedCategory(null); }}
                    />

                    <img src="https://ttcenter.com.vn/uploads/product_menu/dell-1679907775.png"
                        alt=""
                        width={150}
                        onClick={() => { setSelectedBrand('Dell'); setSelectedCategory(null); }}

                    />

                    <img src="https://ttcenter.com.vn/uploads/product_menu/lenovo-1679907549.png"
                        alt=""
                        width={150}
                        onClick={() => { setSelectedBrand('Lenovo'); setSelectedCategory(null); }}
                    />
                </div>

            </div>

            <hr />

            <div className='render_page_category'>
                <h3>Series</h3>

                <div className='category_btns'>
                    <button onClick={() => { setSelectedBrand('ASUS'); setSelectedCategory('ROG'); setSelectedColor(null); }}>ROG</button>
                    <button onClick={() => { setSelectedBrand('ASUS'); setSelectedCategory('VivoBook'); setSelectedColor(null); }}>VivoBook</button>
                    <button onClick={() => { setSelectedBrand('ASUS'); setSelectedCategory('TUF'); }}>TUF</button>

                    <button onClick={() => { setSelectedBrand('MSI'); setSelectedCategory('Prestige'); setSelectedColor(null); }}>Prestige</button>
                    <button onClick={() => { setSelectedBrand('MSI'); setSelectedCategory('Modern'); setSelectedColor(null); }}>Modern</button>
                    <button onClick={() => { setSelectedBrand('MSI'); setSelectedCategory('Stealth'); setSelectedColor(null); }}>Stealth</button>

                    <button onClick={() => { setSelectedBrand('Dell'); setSelectedCategory('Inspiron'); setSelectedColor(null); }}>Inspiron</button>
                    <button onClick={() => { setSelectedBrand('Dell'); setSelectedCategory('Vostro'); setSelectedColor(null); }}>Vostro</button>


                    <button onClick={() => { setSelectedBrand('Lenovo'); setSelectedCategory('Ideapad'); setSelectedColor(null); }}>Ideapad</button>
                    <button onClick={() => { setSelectedBrand('Lenovo'); setSelectedCategory('Legion'); setSelectedColor(null); }}>Legion</button>
                    <button onClick={() => { setSelectedBrand('Lenovo'); setSelectedCategory('Thinkpad'); setSelectedColor(null); }}>Thinkpad</button>
                </div>

            </div>

            <div className='render_page_color'>
                <h3>Màu sắc</h3>
                <div className='color_btns'>
                    <button onClick={() => { setSelectedColor('Black'); }}>Black</button>
                    <button onClick={() => { setSelectedColor('White'); }}>White</button>
                    <button onClick={() => { setSelectedColor('Gray'); }}>Gray</button>
                    <button onClick={() => { setSelectedColor('Silver'); }}>Silver</button>
                    <button onClick={() => { setSelectedColor('Gold'); }}>Gold</button>

                </div>

            </div>

            <div className='render_page_sort'>
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


            </div>

            <div className='render_page_input'>
                <h3>Tìm kiếm</h3>
                <input
                    type="text"
                    placeholder="Tìm kiếm theo price, name, brand, color và category"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>






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
                            ?.filter((product) => {
                                if (
                                    (selectedBrand && product.brand !== selectedBrand) ||
                                    (selectedCategory && product.type !== selectedCategory) ||
                                    (selectedColor && product.color !== selectedColor)
                                ) {
                                    // Lọc ra các sản phẩm không phù hợp với tiêu chí đã chọn, chỉ các sản phẩm phù hợp sẽ được giữ lại trong danh sách lọc
                                    return false;
                                }

                                // Lọc sản phẩm theo tìm kiếm
                                const lowerCaseQuery = searchQuery.toLowerCase();
                                const upperCaseQuery = searchQuery.toUpperCase();

                                return (
                                    //Sản phẩm sẽ được giữ lại trong danh sách nếu nó phù hợp với tìm kiếm
                                    product.price.toString().includes(lowerCaseQuery) ||
                                    product.name.toLowerCase().includes(lowerCaseQuery) ||
                                    product.brand.toLowerCase().includes(upperCaseQuery) ||
                                    product.color.toLowerCase().includes(lowerCaseQuery) ||
                                    product.category.toLowerCase().includes(lowerCaseQuery)

                                );
                            })
                            .sort((a, b) => {
                                if (sortOrder === 'ascending') {
                                    return a.price - b.price;           //tăng dần
                                } else if (sortOrder === 'descending') {
                                    return b.price - a.price;           //giảm dần
                                } else {
                                    return 0; //ko sắp xếp thứ tự, giữ nguyên thứ tự ban đầu
                                }
                            })

                            //sử dụng phương thức slice để lấy ra phần của danh sách phù hợp với trang hiện tại (được xác định bởi startIndex và endIndex) để hiển thị
                            .slice(startIndex, endIndex) // Slice products based on the current page
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


            {/* Pagination controls */}
            <div className="render_page_pagination">
                {/* "Previous" button */}
                <button
                    className='pagination_previous'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >

                    <ion-icon name="chevron-back"></ion-icon>
                </button>

                {/* Page number buttons */}
                {Array.from({ length: Math.ceil(   productStore.data?.length  / productsPerPage) }).map((_, index) => (
                    <button
                        className='pagination_pageNumber'
                        key={index}
                        onClick={() => handlePageChange(index + 1)}  //để số trang bắt đầu từ 1, chứ không phải từ 0
                        //Nếu trang hiện tại (currentPage) trùng với trang được đại diện bởi nút số trang này (index + 1), thì nút này sẽ được vô hiệu hóa, ngăn người dùng nhấp vào trang hiện tại 
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* "Next" button */}
                <button
                    className='pagination_next'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage * productsPerPage >= productStore.data?.length}
                >

                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>

            </div>


            <Offer></Offer>
        </div>
    )
}
