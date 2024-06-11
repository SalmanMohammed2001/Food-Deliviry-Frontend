import {useContext, useState} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";
import axios from "axios";


const PlaceOrder=()=>{

    // @ts-ignore
    const { getTotalAmount,token,food_list,setCartItems,url,cartItems} = useContext(StoreContext)


    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:"",
    })


    const onChangeHandler=(event: { target: { name: any; value: any; }; })=>{
        const name= event.target.name;
        const value= event.target.value

        setData(data=>({...data,[name]:value}))
    }


    const placeOrder= async (event: { preventDefault: () => void; })=>{
        event.preventDefault();

        let orderItems:any=[]

        food_list.map((item:any)=>{
            if(cartItems[item._id]>0){
                let itemInfo= item;
                itemInfo["quantity"]=cartItems[item._id]
                orderItems.push(itemInfo)
            }
        })

        let orderData={
            address:data,
            items:orderItems,
            amount:getTotalAmount()+2,

        }

        const response= await axios.post("http://localhost:4000/api/order/place",orderData,{headers:{token}})

        if(response.data.success){
            console.log(response.data)

            const{session_url} = response.data
            window.location.replace(session_url)

        }else {
            alert("Error")
        }
    }


    return(
        <div>
            <form  action="" className={"place-order flex items-start justify-between gap-[15px] mt-[100px]"}>
                <div className="placer-order-left">
                    <p className={"title  text-[30px] font-[600] mb-[50px]"}> Delivery Information</p>
                    <div className={"multi-field"}>
                        <input required  type="text" placeholder={'First name'} name="firstName" onChange={onChangeHandler} value={data.firstName}/>
                        <input required  type="text" placeholder={'Last name'} name="lastName" onChange={onChangeHandler} value={data.lastName}/>
                    </div>
                    <input required  type="email" placeholder={"Email"} name="email" onChange={onChangeHandler} value={data.email}/>
                    <input required  type="text" placeholder={"Street"} name="street" onChange={onChangeHandler} value={data.street}/>
                    <div className={"multi-field"}>
                        <input required  type="text" placeholder={'City'} name="city" onChange={onChangeHandler} value={data.city}/>
                        <input required  type="text" placeholder={'State'} name="state" onChange={onChangeHandler} value={data.state}/>
                    </div>
                    <div className={"multi-field"}>
                        <input  required type="text" placeholder={'Zip Code'} name="zipcode" onChange={onChangeHandler} value={data.zipcode}/>
                        <input required  type="text" placeholder={'Country'} name="country" onChange={onChangeHandler} value={data.country}/>
                    </div>
                    <input  required type="text" placeholder={"phone"} name="phone" onChange={onChangeHandler} value={data.phone}/>
                </div>


                <div className="placer-order-right">
                    <div className="cart-total flex-1 flex flex-col gap-[20px] ">
                        <h2 className={"text-[24px] font-[600]"}>Cart Total</h2>
                        <div>
                            <div className="cart-total-details  flex justify-between text-[#555] ">
                                <p>Subtotal</p>
                                <p>${getTotalAmount()}</p>
                            </div>
                            <hr className={"my-[10px]"}/>
                            <div className="cart-total-details  flex justify-between text-[#555] ">
                                <p>Delivery</p>
                                <p>${getTotalAmount() == 0 ? 0 : 2}</p>
                            </div>
                            <hr className={"my-[10px]"}/>
                            <div className="cart-total-details  flex justify-between text-[#555] ">
                                <p>Total</p>
                                <p>${getTotalAmount() == 0 ? 0 : getTotalAmount() + 2}</p>
                            </div>

                        </div>
                        <button
                            className={"cart-total-button border-none text-white bg-orange-600  mt-[30px]"} type="submit" onClick={placeOrder}>PROCEED To
                            PAYMENT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PlaceOrder;