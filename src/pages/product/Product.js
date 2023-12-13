import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import {Publish} from "@mui/icons-material";
import {productRows} from "../../dummyData";
import {useDispatch, useSelector} from "react-redux";

export default function Product() {



   const location = useLocation();
   const id = location.pathname.split('/')[2];
    // const prodId = location.pathname.split('/')[2]
   const product = productRows.filter((product) => product.id === parseInt(id));



   // const prodId = location.pathname.split('/')[2];
   //  const dispatch = useDispatch();

    // find product using ist id
    // const product = useSelector(state => state.product.products.find(product => product.id === prodId))

//     const updateProduct = useSelector(state => state.product.products.find(product => product._id === prodId))
// const [product, setProduct] = useState({updateProduct})
//     const handleChange = (event) => {
//         const { title, value} = event.target;
//         setProduct((prevState) => {
//             return {
//                 ...prevState,
//                 [title]: value,
//             };
//         });
//     };
//
//     const handleClick = (e) => {
//         e.preventDefault()
//         const newProduct = { ...product}
//         updateProduct(prodId, newProduct, dispatch())
//     }
//
//
//


    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">




                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src= {product[0].img}
                            alt="" className="productInfoImg"/>
                        <span className="productName">{product[0].name}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Prod. Id:</span>
                            <span className="productInfoValue">{product[0].id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Price:</span>
                            <span className="productInfoValue">{product[0].price}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Currently is stock:</span>
                            <span className="productInfoValue">{product[0].stock}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        {/*<input type="text" placeholder= {product[0].name} onChange={handleChange}/>*/}
                        <input type="text" placeholder= {product[0].name} />
                        <label>Product Description</label>
                        <input type="text" placeholder={product[0].description} />
                        <label>Product Price</label>
                        <input type="text" placeholder={product[0].price} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        {/*    /!*<button onClick={handleClick} className="productButton">Update</button>*!/*/}
                            <button  className="productButton">Update</button>

                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product[0].img} alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        {/*<button onClick={handleClick} className="productButton">Update</button>*/}
                        <button  className="productButton">Update</button>
                    </div>
                    {/*<div className="productTopRight">*/}

                    {/*</div>*/}

                </form>





            </div>
        </div>
    )
}