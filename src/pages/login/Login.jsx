import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './login.scss'

import { Button, Modal, Space } from 'antd';

export default function Login() {

    useEffect(() => {
        if (localStorage.getItem("token")) {
            window.location.href = "/"
        }
    }, [])

    //-----------------------lấy ip
    const [ip, setIp] = useState('');

    useEffect(() => {
        axios.get('https://geolocation-db.com/json/')
            .then(response => {
                setIp(response.data.IPv4);

            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log("IP now:", ip);

    return (
        <div className='login_page'>

            {/* <h1>Your IP address is: {ip}</h1> */}


            <form onSubmit={  (e) => {
                e.preventDefault();
                console.log("", e.target.email.value, e.target.password.value)

                axios.post(`${import.meta.env.VITE_API_HOST}authen/login`, {
                    email: e.target.email.value,
                    password: e.target.password.value,

                })
                .then(res => {

                            //                     return  axios.post(`${import.meta.env.VITE_API_HOST}authen`, {
                            //     phonenumber: "123"
                                
                            //  })

                            
                        if (res.status == 200) {
                            // alert("Đăng nhập thành công!")
                            Modal.error({
                                title: 'Error',
                                content: 'Đăng nhập thành công!',
                            });

                            localStorage.setItem("token", res.data.token)
                            window.location.href = "/";

                        }

                        if (res.status == 213) {
                            // alert("Mật khẩu không chính xác!")
                            Modal.error({
                                title: 'Error',
                                content: 'Mật khẩu không chính xác!',
                            });

                            return
                        }

                    })
                .catch(err => {
                        // alert("Tài khoản không tồn tại!")
                        Modal.error({
                            title: 'Error',
                            content: 'Tài khoản không tồn tại!',
                        });

                        // console.log("loi", err)
                        // console.error("loi");
                    })



                    // axios.post(`${import.meta.env.VITE_API_HOST}authen`, {
                    //     phonenumber: ip,

                    // }).then(res => {
                    //     Modal.success({
                    //         content: 'Đã gửi mail xác nhận tài khoản đến gmail của bạn!'
                    //     });
                    // })




            }} className='form_login form-login'>


                <h3 className="heading">Đăng nhập</h3>
                <p className="desc">Cùng nhau mua sắm Laptop tại Lapshop ❤️</p>
                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        Email đăng nhập:
                    </label>
                    <input
                        name="email"
                        type="text"
                        className="form-input"
                        placeholder="VD: khang@gmail.com"
                    />
                    <span className="form-message" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        Mật khẩu:
                    </label>
                    <input
                        name="password"
                        type="password"
                        className="form-input"
                        placeholder="Nhập mật khẩu"
                    />
                    <span className="form-message" />
                </div>
                <button type="submit" className="form-submit">
                    Đăng nhập
                </button>
                <br />
                <span>Bạn chưa có tài khoản?</span>
                <Link to={"/register"}>Register now!</Link>
                <i className="fa-solid fa-user-plus" />


            </form>
        </div>
    )
}
