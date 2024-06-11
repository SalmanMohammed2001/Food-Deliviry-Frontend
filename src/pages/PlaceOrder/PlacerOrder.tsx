import {useContext, useState} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";


const PlaceOrder=()=>{

    // @ts-ignore
    const { getTotalAmount,token,food_list,setCartItems,url} = useContext(StoreContext)


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



    return(
        <div>
            <form action="" className={"place-order flex items-start justify-between gap-[15px] mt-[100px]"}>
                <div className="placer-order-left">
                    <p className={"title  text-[30px] font-[600] mb-[50px]"}> Delivery Information</p>
                    <div className={"multi-field"}>
                        <input type="text" placeholder={'First name'} name="firstName" onChange={onChangeHandler} value={data.firstName}/>
                        <input type="text" placeholder={'Last name'} name="lastName" onChange={onChangeHandler} value={data.lastName}/>
                    </div>
                    <input type="email" placeholder={"Email"} name="email" onChange={onChangeHandler} value={data.email}/>
                    <input type="text" placeholder={"Street"} name="street" onChange={onChangeHandler} value={data.street}/>
                    <div className={"multi-field"}>
                        <input type="text" placeholder={'City'} name="city" onChange={onChangeHandler} value={data.city}/>
                        <input type="text" placeholder={'State'} name="state" onChange={onChangeHandler} value={data.state}/>
                    </div>
                    <div className={"multi-field"}>
                        <input type="text" placeholder={'Zip Code'} name="zipcode" onChange={onChangeHandler} value={data.zipcode}/>
                        <input type="text" placeholder={'Country'} name="country" onChange={onChangeHandler} value={data.country}/>
                    </div>
                    <input type="text" placeholder={"phone"} name="phone" onChange={onChangeHandler} value={data.phone}/>
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
                            className={"cart-total-button border-none text-white bg-orange-600  mt-[30px]"}>PROCEED To
                            PAYMENT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PlaceOrder;