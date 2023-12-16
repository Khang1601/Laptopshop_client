import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateForm from './components/CreateForm';

export default function CategoryManager() {

  const [categories, setCategories] = useState([]);
  const [formStatus, setFormStatus] = useState(false);


  // useEffect(() => {
  //   axios.get("http://127.0.0.1:3000/apis/v1/products")
  //     .then(res => {
  //       if (res.status == 200) {
  //         dispatch(productAction.setData(res.data.data))
  //         console.log("11111111",res.data.data);
  //         // console.log();
  //       } else {
  //         alert("failed")
  //       }
  //     })
  //     .catch((err) => {
  //       alert("failed catch")
  //     })
  // }, [])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_HOST}categories`)
    .then(res => {
        if(res.status == 200) {
          console.log("categories: ", categories)
          setCategories(res.data.data)
        }else {
          // 213
          console.log("fuck 1");
        }
    })
    .catch(err => {
        // 500
        console.log("fuck u 1");

    })
  }, [])


  return (
    <div>
      <button onClick={() => {
        setFormStatus(true)
      }} className='btn btn-primary'>Add category</button>

      {
        formStatus && <CreateForm setFormStatus={setFormStatus}/> 
      }

      <h2>CategoryManager</h2>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Avatar</th>
            <th scope="col">Status</th>
            <th>Tools</th>
          </tr>
        </thead>
        
        <tbody>
          {
            categories.map((category, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{category.title}</td>
                  <td>
                    <img src={`${import.meta.env.VITE_SERVER_HOST}${category.avatar}`} style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%"
                    }}/>
                  </td>
                  <td>
                    {category.status ? "true" : "false"}
                    

                  </td>
                  <td>
                    <button className='btn btn-danger'>Delete</button>
                    <button className='btn btn-info'>Update</button>

                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
