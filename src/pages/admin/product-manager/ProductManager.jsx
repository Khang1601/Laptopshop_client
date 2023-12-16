import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateFormPD from './components/CreateFormPD';


export default function ProductManager() {

  const [products, setProducts] = useState([]);
  const [formStatusPD, setFormStatusPD] = useState(false);

  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_API_HOST}categories`)
  //   .then(res => {
  //       if(res.status == 200) {
  //         console.log("categories", categories)
  //         setCategories(res.data.data)
  //       }else {
  //         // 213
  //       }
  //   })
  //   .catch(err => {
  //       // 500
  //   })
  // }, [])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_HOST}products`)
    .then(res => {
        if(res.status == 200) {
          console.log("products: ", products)
          setProducts(res.data.data)
        }else {
          // 213
          console.log("fuck 2");
        }
    })
    .catch(err => {
        // 500
        console.log("fuck u 2");

    })
  }, [])


  return (
    <div>

      <button onClick={() => {
        setFormStatusPD(true)
      }} className='btn btn-primary'>Add product</button> 

      {
        formStatusPD && <CreateFormPD setFormStatusPD={setFormStatusPD}/> 
      }

      <h2>ProductManager</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Type</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">Sale</th>
      
    
            <th>Tools</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map((product, index) => {
              return (
                <tr key={Date.now()*Math.random()}>
                  <th scope="row">{index + 1}</th>
      
                  {/* <td>
                    <img src={`${import.meta.env.VITE_SERVER_HOST}${product.avatar}`} style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%"
                    }}/>
                  </td> */}

                  <td>
                    <img src={product.avatar} style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%"
                    }}/>
                  </td>

                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.type}</td>
                  <td>{product.color}</td>
                  <td>{product.price}</td>
                  <td>{product.sale}</td>

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
