import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
// @ts-ignore
import {assets} from "../../assets/assets";

const MyOrder=()=>{
    // @ts-ignore
    const {token}=useContext(StoreContext)
const[data,setData]=useState([])

    const fetchOrders= async ()=>{
        const  response = await axios.get('http://localhost:4000/api/order/userorders',{headers:{token}})
        if(response.status ===200){
            setData(response.data.data)
        }else {
            console.log(error)
        }

    }

    useEffect(() => {
        if(token){
            fetchOrders().then()
        }
    }, [token]);

    return(
        <div className={"my-orders my-[50px]"}>
            <h1 className={"text-[25px] font-bold"}>My Orders</h1>
            <div className="containerr flex flex-col gap-[20px] mt-[30px]">
                {data.map((order,index)=>{

                    return( <div key={index} className={"my-orders-order"}>
                       <img className={"w-[50px]"} src={assets.parcel_icon} alt=""/>
                       <p>{order.items.map((item,index)=>{
                           if(index=== order.items.length-1){
                               return item.name+ " x "+item.quantity
                           }else {
                               return item.name+ " x "+item.quantity+ ", "
                           }
                       })}</p>
                       <p>${order.amount}.00</p>
                       <p>Items :{order.items.length}</p>
                       <p>
                           <li className={"list-disc text-orange-600"}><b className={"text-black"}>{order.status}</b></li>
                       </p>
                       <button className={"border-none py-2 bg-[#ffe1e1] rounded-md text-[#454545]"}>Track Order</button>
                   </div>)
                })}

            </div>
        </div>
    )
}

export default MyOrder