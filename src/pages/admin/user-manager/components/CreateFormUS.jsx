import React, { useState } from 'react'
import './createFormUS.scss'
import axios from 'axios';

export default function CreateFormUS({setFormStatusUS}) {
    const [imgLink, setImgLink] = useState("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")
  return (
    <div className='create_form_box'>
        <form onSubmit={(e) => {
            e.preventDefault();
            let newUsers = {
                email: e.target.email.value,
                avatar: e.target.avatar.files[0],
                role: e.target.role.value,
                status: e.target.status.value,
                ipaddress1: e.target.ipaddress1.value,
                phonenumber: e.target.phonenumber.value,

                // ipaddress2: '1111',
                // email_confirm: '1',
                // password: '123',


            }

            let formData = new FormData();
            formData.append("email", newUsers.email)
            formData.append("avatar", newUsers.avatar)
            formData.append("role", newUsers.role)
            formData.append("status", newUsers.status)
            formData.append("ipaddress1", newUsers.ipaddress1)
            formData.append("phonenumber", newUsers.phonenumber)

            // formData.append("ipaddress2", newUsers.ipaddress2)
            // formData.append("email_confirm", newUsers.email_confirm)
            // formData.append("password", newUsers.password)



            axios.post(`${import.meta.env.VITE_API_ADMIN_HOST}users`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }}>

            <button onClick={() => {
                setFormStatusUS(false)
            }} className='form_close btn btn-danger'>X</button>

            <div>
                email: <input type="text" name="email"/>
            </div>

            <div>
                Avatar: <input onChange={(e) => {
                    if(e.target.files[0]) {
                        setImgLink(URL.createObjectURL(e.target.files[0]))
                    }
                }} type="file" name="avatar"/>
                <img className='avatar_review' src={imgLink}/>
            </div>

            <div>
                role: <input type="text" name="role"/>
            </div>

            <div>
                status: <input type="text" name="status"/>
            </div>

            <div>
                ipaddress1: <input type="text" name="ipaddress1"/>
            </div>

            <div>
                phonenumber: <input type="text" name="phonenumber"/>
            </div>

            <button type='submit'>Create user</button>
        </form>
    </div>
  )
}