import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";
import axios from "axios";

const MyOrder=()=>{
    // @ts-ignore
    const {token}=useContext(StoreContext)
const[data,setData]=useState()

    const fetchOrders= async ()=>{
        const  response = await axios.get('http://localhost:4000/api/order/userorders',{headers:{token}})
        if(response.status ===200){
            setData(response.data.data)
        }

    }

    useEffect(() => {
        fetchOrders().then()
    }, []);

    return(
        <div>

        </div>
    )
}

export default MyOrder