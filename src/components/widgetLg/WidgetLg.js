import React, {useEffect, useState} from "react";
import "./widgetLg.css";
import {orders} from "../../dummyData";
import { format } from "timeago.js";
import { userRequest } from '../../requestMethods';

export default function WidgetLg() {

    // const [orders, setOrders] = useState([]);
    //
    // useEffect(() => {
    //     const getOrders = async () => {
    //         const res = await userRequest.get('/orders')
    //         setOrders(res.data)
    //     }
    //     getOrders()
    // }, [])


    const Button = ({ type }) => {
        return <button className={"widgetLgButton" + type}>{type}</button>;
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer Id</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {orders.map((order) => (
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src={order.avatar} className="widgetLgImg"/>
                            <span className="widgetLgName">{order.userId}</span>
                        </td>
                        <td className="widgetLgDate">{format(order.createdAt)}</td>
                        <td className="widgetLgAmount">$ {order.amount}</td>
                        <td className="widgetLgStatus">
                            <Button type= {order.status}/>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        //     <tr className="widgetLgTr">
        //             <td className="widgetLgUser">
        //                 <img
        //                     src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //                     alt=""
        //                     className="widgetLgImg"
        //                 />
        //                 <span className="widgetLgName">Susan Carol</span>
        //             </td>
        //             <td className="widgetLgDate">2 Jun 2021</td>
        //             <td className="widgetLgAmount">$122.00</td>
        //             <td className="widgetLgStatus">
        //                 <Button type="Approved" />
        //             </td>
        //         </tr>
        //         <tr className="widgetLgTr">
        //             <td className="widgetLgUser">
        //                 <img
        //                     src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //                     alt=""
        //                     className="widgetLgImg"
        //                 />
        //                 <span className="widgetLgName">Susan Carol</span>
        //             </td>
        //             <td className="widgetLgDate">2 Jun 2021</td>
        //             <td className="widgetLgAmount">$122.00</td>
        //             <td className="widgetLgStatus">
        //                 <Button type="Declined" />
        //             </td>
        //         </tr>
        //         <tr className="widgetLgTr">
        //             <td className="widgetLgUser">
        //                 <img
        //                     src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //                     alt=""
        //                     className="widgetLgImg"
        //                 />
        //                 <span className="widgetLgName">Susan Carol</span>
        //             </td>
        //             <td className="widgetLgDate">2 Jun 2021</td>
        //             <td className="widgetLgAmount">$122.00</td>
        //             <td className="widgetLgStatus">
        //                 <Button type="Pending" />
        //             </td>
        //         </tr>
        //         <tr className="widgetLgTr">
        //             <td className="widgetLgUser">
        //                 <img
        //                     src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //                     alt=""
        //                     className="widgetLgImg"
        //                 />
        //                 <span className="widgetLgName">Susan Carol</span>
        //             </td>
        //             <td className="widgetLgDate">2 Jun 2021</td>
        //             <td className="widgetLgAmount">$122.00</td>
        //             <td className="widgetLgStatus">
        //                 <Button type="Approved" />
        //             </td>
        //         </tr>
        //     </table>
        // </div>
    )
}