import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss'



export default function Header() {
    const userStore = useSelector(store => store.userStore)

    const { receiptStore } = useSelector(state => state);


    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(() => {
    //     console.log("userStore", userStore.data)

    // }, [userStore.data])

    useEffect(() => {
        console.log("userStore", userStore.data)

    }, [userStore.data])




    return (
        <div className='home_navbar'>

            <div className='home_navbar_content'>

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">


                        <img src="https://firebasestorage.googleapis.com/v0/b/testfirebase-d283a.appspot.com/o/products%2Fimg-logo.PNG?alt=media&token=9b96ddd5-e697-4351-8a06-8ef52ce44a73&_gl=1*hm9lx0*_ga*MTExNDg3OTg4OC4xNjg5Nzg4MTUx*_ga_CW55HF8NVT*MTY5NjI2MTc3Ny4xNC4xLjE2OTYyNjIzMzMuNTIuMC4w"
                            className='img_logo' width='200px' height='46px' alt="" onClick={() => navigate('/')} />

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />

                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0  navbar-nav">

                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle desc_danhmuc"
                                        href="#"
                                        id="navbarDropdown"
                                        // role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fa-solid fa-bars  icon_danhmuc"></i>
                                        &nbsp;
                                        Danh mục
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            {/* <a className="dropdown-item" href="#"> */}
                                            <Link to="/" className='dropdown-menu-link'>Trang chủ</Link>

                                            {/* </a> */}
                                        </li>
                                        <li>
                                            {/* <a className="dropdown-item" href="#"> */}
                                            <Link to="/suggests" className='dropdown-menu-link'>Gợi ý</Link>
                                            {/* </a> */}
                                        </li>
                                        <li>
                                            {/* <a className="dropdown-item" href="#"> */}
                                            <Link to="/offers" className='dropdown-menu-link'>Khuyến mãi</Link>
                                            {/* </a> */}
                                        </li>
                                        <li>

                                            {/* <a className="dropdown-item" href="#"> */}
                                            <Link to="/blogs" className='dropdown-menu-link'>Blog</Link>
                                            {/* </a> */}
                                        </li>

                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>

                                        <li>
                                            {/* <a className="dropdown-item" href="#"> */}
                                            <Link to="/receipts" className='dropdown-menu-link'>Biên lai</Link>

                                            {/* </a> */}
                                        </li>
                                        <li>
                                            {/* <a className="dropdown-item" href="#"> */}
                                            <Link to="/carts" className='dropdown-menu-link'>Giỏ hàng</Link>
                                            {/* </a> */}
                                        </li>


                                    </ul>
                                </li>


                                <li>
                                    <form className="form-inline my-2 my-lg-0 btn_nav_find" onSubmit={async (e) => {
                                        e.preventDefault();
                                    }}>
                                        <input
                                            className="form-control mr-sm-2 "
                                            type="search"
                                            placeholder="Tìm kiếm sản phẩm"
                                            style={{ borderRadius: "0" }}
                                        />
                                        <button type="submit" className='btn_search'>
                                            Search
                                        </button>


                                    </form>
                                </li>

                            </ul>

                            <div className='icon_nav'>


                                {
                                    userStore.data == null ? (
                                        <div className='login_user'>

                                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ width: "30px", height: "30px" }} alt="" />
                                            <span>Hãy đăng nhập</span>
                                            <Link to="/login" className='btn_login'>
                                                Login
                                            </Link>
                                        </div>
                                    ) : (

                                        <div className='logout_user'>
                                            {userStore.data.role == "admin" ? (

                                                <Link to="/admin" className='btn_admin'>Trang Admin</Link>
                                            ) : null}

                                            <span className='span_logout'>
                                                <img src={userStore.data.avatar} style={{ width: "30px", height: "30px" }} alt="" />
                                                {userStore.data?.email.split('@')[0]}
                                            </span>
                                            <button onClick={() => {
                                                localStorage.removeItem("token");
                                                // navigate("/")
                                                // window.location.reload()
                                                window.location.href = '/'

                                            }} className='btn_logout'>Logout</button>


                                        </div>
                                    )
                                }



                                <Link to="/receipts" style={{ display: 'flex' }} className="header-action-btn">
                                    <ion-icon name="notifications" className="custom-icon"></ion-icon>
                                    {/* <ion-icon name="clipboard"></ion-icon> */}
                                </Link>

                                <Link to="/carts" style={{ display: 'flex' }} className="header-action-btn">

                                    <span id="cart_count" className="span">

                                        {receiptStore.cart?.receipt_details?.reduce((result, cur) => {
                                            return result + cur.quantity
                                        }, 0)} {receiptStore.cart == null && 0}

                                    </span>

                                    <ion-icon id="cart_icon" name="bag-handle" aria-hidden="true"></ion-icon>
                                </Link>

                                {/* Cart: {userStore.cart?.reduce((value, cur) => {
                                    return value += cur.quantity
                                }, 0)} */}
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

            {/* <div className='home_navbar_link'>
                <ul className="navbar-list">
                <li>
                <a href="#" className="navbar-link">Trang Chủ</a>
                </li>

                <li>
                <a href="#section-goto-collection" class="navbar-link">Sản Phẩm</a>
                </li>

                <li>
                <a href="#section-goto-offer" class="navbar-link">Ưu Đãi</a>
                </li>

                <li>
                <a href="#section-goto-popular" class="navbar-link">Gợi Ý</a>
                </li>

                <li>
                <a href="#section-goto-blog" class="navbar-link">Blog</a>
                </li>

                <li>
                <a href="#section-goto-contact" class="navbar-link">Liên Hệ</a>
                </li>

            </ul>
            </div> */}
        </div>
    )
}
