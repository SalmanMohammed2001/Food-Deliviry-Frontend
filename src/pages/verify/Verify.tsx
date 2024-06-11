import {useNavigate, useSearchParams} from "react-router-dom";

import axios from "axios";
import {useEffect} from "react";


const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const navigate=useNavigate();

    const verifyPayment =async ()=> {
        const response = await axios.post("http://localhost:4000/api/order/verify", {success, orderId})

        console.log(response.status===200)
        if(response.status===200){
             navigate("/myOrders")
    }else {
            navigate("/")
        }

    }

    useEffect(()=>{
        verifyPayment().then()
    },[])


    return (

        <div className={"verify min-h-[60vh] grid"}>
            <div
                className={"spinner w-[100px] h-[100px] place-self-center border-2 border-[#bdbdbd] rounded-full border-solid border-t-orange-600"}></div>

        </div>
    )
}
export default Verify