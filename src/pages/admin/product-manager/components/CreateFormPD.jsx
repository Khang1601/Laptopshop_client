import React, { useState } from 'react'
import './createFormPD.scss'
import axios from 'axios';

export default function CreateFormPD({setFormStatusPD}) {
    const [imgLink, setImgLink] = useState("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")
  return (
    <div className='create_form_box'>
        <form onSubmit={(e) => {
            e.preventDefault();
            let newProduct = {
                name: e.target.name.value,
                avatar: e.target.avatar.files[0],
                brand: e.target.brand.value,
                color: e.target.color.value,
                sale: e.target.sale.value,
                type: e.target.type.value,
                price: e.target.price.value,

            }

            let formData = new FormData();
            formData.append("name", newProduct.name)
            formData.append("avatar", newProduct.avatar)
            formData.append("brand", newProduct.brand)
            formData.append("color", newProduct.color)
            formData.append("sale", newProduct.sale)
            formData.append("type", newProduct.type)
            formData.append("price", newProduct.price)

            axios.post(`${import.meta.env.VITE_API_ADMIN_HOST}products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }}>

            <button onClick={() => {
                setFormStatusPD(false)
            }} className='form_close btn btn-danger'>X</button>

            <div>
                name: <input type="text" name="name"/>
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
                brand: <input type="text" name="brand"/>
            </div>     
            <div>
                color: <input type="text" name="color"/>
            </div>               
            <div>
                sale: <input type="text" name="sale"/>
            </div>               
            <div>
                type: <input type="text" name="type"/>
            </div>       
            <div>
                price: <input type="text" name="price"/>
            </div>   
               

            <button type='submit'>Create product</button>
        </form>
    </div>
  )
}