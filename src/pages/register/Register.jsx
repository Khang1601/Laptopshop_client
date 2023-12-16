import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.scss'
import axios from 'axios';

import { Button, Modal, Space } from 'antd';


export default function Register() {

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            window.location.href = "/"
        }
    }, [])

    const validateEmail = {
        isEmail: function (emailString) {
            // regex email
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailString)
        }
    }

    const validatePassword = {
        isPassword: function (passwordString) {
            //regex password có nhiều hơn 3 ký tự
            return /^.{3,}$/.test(passwordString)
        }
    }

    const validatePhoneNumber = {
        isPhoneNumber: function (phoneNumberString) {
            //regex phonenumber có 10 ký tự
            return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phoneNumberString)
        }
    }

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



    return (
        <div className='register_page'>

            {/* <h1>Your IP address is: {ip}</h1> */}

            <form onSubmit={(e) => {
                e.preventDefault();

                if (!(validateEmail.isEmail(e.target.email.value))) {
                    // showErrorToast_email()
                    // alert("Email không đúng định dạng!")
                    Modal.error({
                        title: 'Error',
                        content: 'Email không đúng định dạng!',
                    });
                    return
                }

                if (!(validatePassword.isPassword(e.target.password.value))) {
                    // alert("Password không đúng định dạng!")
                    // showErrorToast_password()
                    Modal.error({
                        title: 'Error',
                        content: 'Password phải từ 3 kí tự trở lên!',
                    });
                    return
                }

                if (e.target.password.value != e.target.passwordConfirm.value) {
                    // alert("Mật khẩu và mật khẩu nhập lại phải giống nhau!")
                    // showErrorToast_passwordwrong()
                    Modal.error({
                        title: 'Error',
                        content: 'Mật khẩu và mật khẩu nhập lại phải giống nhau!',
                    });
                    return
                }

                if (!(validatePhoneNumber.isPhoneNumber(e.target.phonenumber.value))) {
                    // alert("SĐT không đúng định dạng!")
                    // showErrorToast_phonenumber()
                    Modal.error({
                        title: 'Error',
                        content: 'SĐT không đúng định dạng!',
                    });
                    return
                }



                axios.post(`${import.meta.env.VITE_API_HOST}authen`, {
                    email: e.target.email.value,
                    password: e.target.password.value,
                    phonenumber: e.target.phonenumber.value,
                    // passwordConfirm: e.target.passwordConfirm.value,
                    ipaddress1: ip,
                    ipaddress2: ip


                }).then(res => {

                        if (res.status == 200) {
                            console.log("res", res)
                            // if (window.confirm("Login now?")) {
                            //     navigate("/login")
                            // }

                            // alert("Đăng ký thành công!")
                            Modal.success({
                                content: 'Đăng ký thành công!'
                            });

                            // alert("Đã gửi mail xác nhận tài khoản đến gmail của bạn!")
                            Modal.success({
                                content: 'Đã gửi mail xác nhận tài khoản đến gmail của bạn!'
                            });

                            navigate("/login")
                        }

                        if (res.status == 213) {
                            console.log("res", res)

                            // alert("tài khoản đã tồn tại")
                            Modal.error({
                                title: 'Error',
                                content: 'Tài khoản đã tồn tại!',
                            });
                        }

                    }).catch(err => {
                        // alert("sập!")
                        Modal.error({
                            title: 'Error',
                            content: 'Server sập!',
                        });
                    })


            }} className='register_form form form-register'>

                {/* <div>
                Email: <input type="email" name='email'/>
            </div>
            <div>
                Password: <input type="password" name='password'/>
            </div>
            <div>
                phonenumber: <input type="phonenumber" name='phonenumber'/>
            </div>
            <button type='submit'>Register</button> */}


                <h3 className="heading">Đăng ký thành viên</h3>
                <p className="desc">Cùng nhau mua sắm Laptop tại Lapshop ❤️</p>

                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        Email:
                    </label>
                    <input
                        name="email"
                        type="text"
                        className="form-input"
                        placeholder="VD: email@domain.com"
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

                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        Nhập lại mật khẩu:
                    </label>
                    <input
                        name="passwordConfirm"
                        type="password"
                        className="form-input"
                        placeholder="Nhập lại mật khẩu"
                    />
                    <span className="form-message" />
                </div>

                <div className="form-group">
                    <label htmlFor="" className="form-label">
                        Số điện thoại:
                    </label>
                    <input
                        name="phonenumber"
                        type="text"
                        className="form-input"
                        placeholder="VD: 01234567890"
                    />
                    <span className="form-message" />
                </div>

                <button type="submit" className="form-submit">
                    Đăng ký
                </button>
                <br />
                <span>Bạn đã có tài khoản?</span>
                <Link to={"/login"}>Login now!</Link>
                <i className="fa-solid fa-user-check" />

            </form>
        </div>
    )
}
