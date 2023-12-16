import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productAction } from '../../store/slices/product.slice';
import { userAction } from '../../store/slices/user.slice'
import { receiptAction } from '../../store/slices/receipt.slice';
import Navbar from '../../components/example/Navbar';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ScrollToTop from '../../components/scrolltotop/ScrollToTop';
import './home.scss'
import RenderProduct from '../../components/renderProduct/RenderProduct';

import { useLocation } from 'react-router-dom';

export default function Home() {

  const dispatch = useDispatch();
  

  useEffect(() => {

    if (localStorage.getItem("token")) {
      axios.post(`${import.meta.env.VITE_API_HOST}authen/${localStorage.getItem("token")}`)
        .then(res => {

          

          if (res.status == 200) {
            dispatch(userAction.setData(res.data.data.data))

            console.log("res.data.data.data Home", res.data.data.data)

            // Get cart, receipt
            axios.get("http://127.0.0.1:3000/apis/v1/receipts/" + res.data.data.data.id)
              .then(receiptRes => {
                if (receiptRes.status == 200) {
                  // save to store
                  /*
                    Cart là receipt nhưng đang ở trạng thái shopping
                    Receipt là những trạng thái khác.
                  */
                  //  console.log('receiptRes.data.data', receiptRes.data.data)
                  let cart = null;
                  let receipts = [];
                  for (let i in receiptRes.data.data) {
                    if (receiptRes.data.data[i].status == 'shopping') {
                      cart = receiptRes.data.data[i]
                    } else {
                      receipts.push(receiptRes.data.data[i])
                    }
                  }
                  dispatch(receiptAction.setCart(cart))
                  dispatch(receiptAction.setReceipt(receipts))
                }
              })
          } else {
            localStorage.removeItem("token")
          }
        })
    }

  }, [])


  useEffect(() => {
    axios.get("http://127.0.0.1:3000/apis/v1/products")
      .then(res => {
        if (res.status == 200) {
          dispatch(productAction.setData(res.data.data))
          console.log("11111111",res.data.data);
        } else {
          alert("failed")
        }
      })
      .catch((err) => {
        alert("failed catch")
      })
  }, [])



  //---------hiện content ở home
  const location = useLocation();
  const shouldRender = location.pathname === '/';
  const isOnHome = location.pathname === '/';


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
    <div className='home_page'>

      {/* <h1>Your IP address is: {ip}</h1> */}

      {/* <header>Header <Navbar></Navbar></header> */}

      <Header></Header>


      <div className='home_page_container'>

        {shouldRender && (
          <div>
            
            <RenderProduct></RenderProduct>

          </div>
        )}

        <Outlet />
      </div>

      <Footer></Footer>

      <ScrollToTop></ScrollToTop>
    </div>
  )
}
