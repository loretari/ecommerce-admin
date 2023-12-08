import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";



function App() {

  //  check if the user is an admin
  //   const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  return (
    <BrowserRouter>

        <Routes>
            <Route path= "/login" element={<Login/>}/>
        </Routes>
            {/*{  admin && ( <>*/}
                <Topbar/>



                <div className= "container">

                    <Sidebar/>
                    <Routes>
                        <Route index path= "/" element={<Home/>}/>
                        <Route path= "/users" element={<UserList/>}/>
                        <Route path= "/user/:userId" element={<User/>}/>
                        <Route path= "/newUser" element={<NewUser/>}/>
                        <Route path= "/products" element={<ProductList/>} />
                        <Route path= "/product/:ID" element={<Product/>}/>
                        <Route path= "/newproduct" element={<NewProduct/>} />
                    </Routes>
                </div>
            {/*</>)}*/}




        </BrowserRouter>
  );
}

export default App;
