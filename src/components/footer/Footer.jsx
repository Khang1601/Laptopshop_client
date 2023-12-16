import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <div className='home_footer'>
            {/* <div className='home_footer_content'> */}


            <footer
                className="home_footer_content"
                //   style={{ backgroundImage: 'url("")' }}
                // style={{ backgroundColor: 'white' }}

            >
                <div className="footer-top">
                    <div className="container grid-list">
                        {/* icon + desc + social */}
                        <div className="footer-brand">
                            {/* icon */}
                            <a href="#" className="logo">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/testfirebase-d283a.appspot.com/o/products%2Fimg-logo.PNG?alt=media&token=9b96ddd5-e697-4351-8a06-8ef52ce44a73&_gl=1*hm9lx0*_ga*MTExNDg3OTg4OC4xNjg5Nzg4MTUx*_ga_CW55HF8NVT*MTY5NjI2MTc3Ny4xNC4xLjE2OTYyNjIzMzMuNTIuMC4w" alt="lapshop home"
                                />
                            </a>
                            {/* desc */}
                            <p className="footer-text">
                                LaptopShop nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt
                                mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống
                                LaptopShop trên toàn quốc.
                            </p>
                            {/* social */}
                            <ul className="social-list">
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-pinterest" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* dịch vụ + hỗ trợ + tài khoản của tôi */}
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">DỊCH VỤ</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Điều khoản sử dụng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Chính sách bảo mật
                                </a>
                            </li>
 
                            <li>
                                <a href="#" className="footer-link">
                                    Hệ thống cửa hàng
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">HỖ TRỢ</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Chính sách bảo hành
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Chính sách vận chuyển
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Phương thức thanh toán
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">TÀI KHOẢN</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Đăng nhập
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Tạo mới tài khoản
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Lịch sử mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 
                    - #CONTACT
                */}
                
                <div id="section-goto-contact" className="footer-bottom">
                    <div className="footer-bottom-list">
                        <p className="copyright">Web được thiết kế bởi Nguyễn Đình Khang</p>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/testfirebase-d283a.appspot.com/o/products%2Fpayment-method.png?alt=media&token=90903113-5e7e-47ea-b98a-5e3fe39a6189&_gl=1*7auup1*_ga*MTExNDg3OTg4OC4xNjg5Nzg4MTUx*_ga_CW55HF8NVT*MTY5NjUyMTAwMC4xOS4xLjE2OTY1MjEwNjguNTIuMC4w"
                            // width={311}
                            // height={30}
                            loading="lazy"
                            alt="Payment method"
                            className="w-100"
                        />
                    </div>
                </div>
            </footer>






            {/* </div> */}

        </div>

    )
}
