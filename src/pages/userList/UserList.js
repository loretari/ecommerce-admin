import React, {useEffect, useState} from "react";
import "./userList.css";
import {userRows} from "../../dummyData";
import {DeleteOutline} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import {useDispatch, useSelector} from "react-redux";
// import { getClients, deleteClient } from "../../redux/apiCalls";

export default function UserList () {

    const [data, setData] = useState(userRows)

    const dispatch = useDispatch();
    const users = useSelector((state) => state.client.clients)
    console.log(users);

    // useEffect(() => {
    //     getClients(dispatch);
    // }, [dispatch]);
    //
    //
    // const handleDelete = (id) => {
    //     setData(data.filter((item) => item.id !== id));
    //     deleteClient(id, dispatch);
    // }

    const columns = [
        { field: "id",
          // field: "_id",
          headerName: "ID",
          width: 270
        },
        { field: "user",
          // field: "username",
            headerName: "User",
            width: 270,
            renderCell: (params) => {
            return (
                <div className= "userListUser">
                    <img className= "userListImg"
                    src={params.row.avatar} alt= ""
                    />
                    {/*<div className="productListItem">*/}
                        {/* <img className="productListImg" src={params.row.image} alt="" /> */}
                    {params.row.username}
                    {/*</div>*/}
                </div>
            );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        // {
        //     field: "status",
        //     headerName: "Status",
        //     width: 120,
        // },
        {
            // field: "transaction",
            // headerName: "Transaction Volume",
            // width: 160,
            field: "isAdmin",
            headerName: "Admin",
            width: 270,
        },
        {
            field: "action",
            headerName: "Action",
            width: 270,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <Link to={"/users/" + params.row._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            // onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ]

   return (
       <div className= "userList">
           {/*<div className="productList">*/}
           <DataGrid
           rows = {data}
           // rows={users}
           disableSelectionOnClick
           columns = {columns}
           pageSize = {9}
           // getRowId={(row) => row._id}
           // chackboxSelection
           />
       </div>
   )
}