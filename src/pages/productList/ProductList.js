import React, {useEffect, useState} from "react";
import "./productList.css";
import { Link } from "react-router-dom";
import {productRows} from "../../dummyData";
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@mui/icons-material";
import {deleteProduct, getProducts } from "../../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";


export default function ProductList () {

    const [data, setData] = useState(productRows);
    // const dispatch = useDispatch();
    // const products = useSelector(state => state.product.products)
    //
    // useEffect(() => {
    //     getProducts(dispatch)
    // }, [dispatch])

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        // deleteProduct(id, dispatch)
    }

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // { field: "_id", headerName: "ID", width: 90 },
    {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {/*<img className="productListImg" src={params.row.image} alt="" />*/}
                    {params.row.name}
                    {/*{params.row.title}*/}
                </div>
            );
        },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
        field: "status",
        headerName: "Status",
        width: 120,
    },
    // {field: "inStock", headerName: "Stock", width: 200 },
    {
        field: "price",
        headerName: "Price",
        width: 160,
    },
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <Link to={"/product/" + params.row.id}>
                    {/*<Link to={"/product/" + params.row._id}>*/}

                    <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline
                        className="productListDelete"
                        onClick={() => handleDelete(params.row.id)}
                        // onClick={() => handleDelete(params.row._id)}
                    />
                </>
            );
        },
    },
]


    return (
        <div className= "productList">
            <DataGrid
            rows = {data}
            // rows = {products}
            disableSelectionOnClick
            columns = {columns}
            pageSize = {10}
            // checkboxSelection
            />
        </div>
    )
}