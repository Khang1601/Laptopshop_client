import {Routes, Route} from 'react-router-dom';
import LazyFn from '../utils/lazy_folder/lazy.util'
import Home from '../pages/homes/Home'

import ProductManager from '../pages/admin/product-manager/ProductManager';
import CategoryManager from '../pages/admin/category-manager/CategoryManager';
import UserManager from '../pages/admin/user-manager/userManager';

import Register from '../pages/register/Register';
import Login from '../pages/login/Login';

import Suggest from '../pages/suggests/Suggest';
import Blog from '../pages/blogs/Blog';
import Offer from '../pages/offers/Offer';
import Cart from '../pages/carts/Cart';
import Receipt from '../pages/receipts/Receipt';

import Product from '../pages/product/Product';



export default <Routes>
    {/* element={LazyFn(() => import('../pages/homes/Home.jsx'))()} */}
    <Route path='' element={<Home/>}>
        {/* Se co navbar + footer */}
        <Route path='about' element={<>About</>} />

        {/* <Route path='products' element={LazyFn(() => import('../pages/product/Product'))()} /> */}
        <Route path='products' element={<Product/>} />


        <Route  path="/suggests" element={<Suggest/>}></Route>
        <Route  path="/blogs" element={<Blog/>}></Route>
        <Route  path="/offers" element={<Offer/>}></Route>
        <Route  path="/carts" element={<Cart/>}></Route>
        <Route  path="/receipts" element={<Receipt/>}></Route>

        <Route path='register' element={<Register></Register>} />
        <Route path='login' element={<Login></Login>} />


    </Route>


    {/* khong co navbar + footer */}
    <Route path='/admin' element={LazyFn(() => import('../pages/admin/admin.main'))()} >
        <Route path='product-manager' element={<ProductManager/>}></Route>
        <Route path='category-manager' element={<CategoryManager/>}></Route>
        {/* <Route path='user-manager' element={<UserManager/>}></Route> */}
    
    </Route>

</Routes>