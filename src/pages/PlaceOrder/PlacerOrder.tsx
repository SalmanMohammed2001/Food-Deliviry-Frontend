import {useContext} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";


const PlaceOrder=()=>{

    // @ts-ignore
    const { getTotalAmount} = useContext(StoreContext)
    return(
        <div>
            <form action="" className={"place-order flex items-start justify-between gap-[15px] mt-[100px]"}>
                <div className="placer-order-left">
                    <p className={"title  text-[30px] font-[600] mb-[50px]"}> Delivery Information</p>
                    <div className={"multi-field"}>
                        <input type="text" placeholder={'First name'}/>
                        <input type="text" placeholder={'Last name'}/>
                    </div>
                    <input type="text" placeholder={"Email"}/>
                    <input type="text" placeholder={"Street"}/>
                    <div className={"multi-field"}>
                        <input type="text" placeholder={'City'}/>
                        <input type="text" placeholder={'State'}/>
                    </div>
                    <div className={"multi-field"}>
                        <input type="text" placeholder={'Zip Code'}/>
                        <input type="text" placeholder={'Country'}/>
                    </div>
                    <input type="text" placeholder={"phone"}/>
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