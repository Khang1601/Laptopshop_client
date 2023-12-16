import React from 'react'
import './disc.scss'

export default function Disc() {
    return (
      

            <section className="feature" aria-label="feature">
                
                    {/* feature grid list */}
                    <div className="grid-list">
                        {/* Free ship */}
                        <li>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/testfirebase-d283a.appspot.com/o/products%2Ffeature-1.png?alt=media&token=7306af5c-e9d3-475d-9668-97fb754ac86c&_gl=1*1n8zyf4*_ga*MTExNDg3OTg4OC4xNjg5Nzg4MTUx*_ga_CW55HF8NVT*MTY5NjQxMzY2NS4xNy4xLjE2OTY0MTQyNjEuNTYuMC4w"
                                   
                                        loading="lazy"
                                        alt="feature icon"
                                        className="w-100"
                                    />
                                </div>
                                <div>
                                    <h3 className="card-title">Free Ship</h3>
                                    <p className="card-text">Khi order trên 1.000.000đ</p>
                                </div>
                            </div>
                        </li>
                        {/* Thanh toán */}
                        <li>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/testfirebase-d283a.appspot.com/o/products%2Ffeature-2.png?alt=media&token=d0fab61a-6b1a-415a-872a-fce6d2797b10&_gl=1*sz0wwy*_ga*MTExNDg3OTg4OC4xNjg5Nzg4MTUx*_ga_CW55HF8NVT*MTY5NjQxMzY2NS4xNy4xLjE2OTY0MTQyNzguMzkuMC4w"
                                       
                                        loading="lazy"
                                        alt="feature icon"
                                        className="w-100"
                                    />
                                </div>
                                <div>
                                    <h3 className="card-title">Thanh toán an toàn</h3>
                                    <p className="card-text">An toàn 100%</p>
                                </div>
                            </div>
                        </li>
                        {/* Giá tốt */}
                        <li>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/testfirebase-d283a.appspot.com/o/products%2Ffeature-3.png?alt=media&token=9b4ddb6c-58a6-46e5-889e-0ce7b6ded221&_gl=1*b694hl*_ga*MTExNDg3OTg4OC4xNjg5Nzg4MTUx*_ga_CW55HF8NVT*MTY5NjQxMzY2NS4xNy4xLjE2OTY0MTQzMDIuMTUuMC4w"
                                   
                                        loading="lazy"
                                        alt="feature icon"
                                        className="w-100"
                                    />
                                </div>
                                <div>
                                    <h3 className="card-title">Giá tốt nhất</h3>
                                    <p className="card-text">Đảm bảo giá tốt nhất</p>
                                </div>
                            </div>
                        </li>
                        {/* Đổi trả */}
                        <li>
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/testfirebase-d283a.appspot.com/o/products%2Ffeature-4.png?alt=media&token=f522101c-c692-4b14-b6a0-7f218ca63c27&_gl=1*dewzm2*_ga*MTExNDg3OTg4OC4xNjg5Nzg4MTUx*_ga_CW55HF8NVT*MTY5NjQxMzY2NS4xNy4xLjE2OTY0MTQzMTcuNjAuMC4w"
                                
                                        loading="lazy"
                                        alt="feature icon"
                                        className="w-100"
                                    />
                                </div>
                                <div>
                                    <h3 className="card-title">Đổi trả dễ dàng</h3>
                                    <p className="card-text">Trả hàng trong vòng 30 ngày</p>
                                </div>
                            </div>
                        </li>
                    </div>
             
            </section>

    )
}
