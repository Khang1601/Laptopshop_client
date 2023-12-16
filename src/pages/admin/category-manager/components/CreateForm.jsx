import React, { useState } from 'react'
import './createForm.scss'
import axios from 'axios';

export default function CreateForm({setFormStatus}) {
    const [imgLink, setImgLink] = useState("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")
  return (
    <div className='create_form_box'>
        <form onSubmit={(e) => {
            e.preventDefault();
            let newCategory = {
                title: e.target.title.value,
                avatar: e.target.avatar.files[0]
            }

            let formData = new FormData();
            formData.append("title", newCategory.title)
            formData.append("avatar", newCategory.avatar)

            axios.post(`${import.meta.env.VITE_API_ADMIN_HOST}categories`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }}>

            <button onClick={() => {
                setFormStatus(false)
            }} className='form_close btn btn-danger'>X</button>

            <div>
                Title: <input type="text" name="title"/>
            </div>

            <div>
                Avatar: <input onChange={(e) => {
                    if(e.target.files[0]) {
                        setImgLink(URL.createObjectURL(e.target.files[0]))
                    }
                }} type="file" name="avatar"/>
                <img className='avatar_review' src={imgLink}/>
            </div>

            <button type='submit'>Create category</button>
        </form>
    </div>
  )
}