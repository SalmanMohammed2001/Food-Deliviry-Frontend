import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useContext} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";
import {useNavigate} from "react-router-dom";


const Cart = () => {

    const {cartItems, food_list, removeFromCart, getTotalAmount} = useContext(StoreContext)

    const navigate =useNavigate();

    return (
        <div className={"cart mt-[100px]"}>
            <div className="cart-items">
                <div className="cart-item-title ">
                    <p>Items</p>
                    <p>Tile</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br/>
                <br/>

                {
                    food_list.map((item: {
                        _id: string | number;
                        image: string | undefined;
                        name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined;
                    }, index: Key | null | undefined)=>{
                        if(cartItems[item._id]>0){

                            return (
                                <div>
                                <div key={index} className={"cart-item-title cart-item-item my-[10px] text-black"}>
                                    <img src={item.image} alt="" className={"w-[50px]"}/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price *cartItems[item._id] }</p>
                                    <p onClick={()=>removeFromCart(item._id)} className={"cross  cursor-pointer"}>x</p>
                                </div>
                                    <hr className={"h-[1px] bg-[#e2e2e2] border-none"}/>

                                </div>
                            )
                        }
                    })
                }

            </div>

            <div className="cart-bottom mt-[80px] flex justify-between gap-[100px]">
                <div className="cart-total flex-1 flex flex-col gap-[20px] ">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details  flex justify-between text-[#555] " >
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr className={"my-[10px]"}/>
                        <div className="cart-total-details  flex justify-between text-[#555] " >
                            <p>Delivery</p><p>${2}</p>
                        </div>
                        <hr className={"my-[10px]"}/>
                        <div className="cart-total-details  flex justify-between text-[#555] " >
                            <p>Total</p>
                            <p>${getTotalAmount()+2}</p>
                        </div>

                    </div>
                    <button onClick={()=>navigate('/order')} className={"cart-total-button border-none text-white bg-orange-600  ]"}>PROCEED To CHECKED</button>
                </div>
                <div className="cart-promocode  flex-1">
                    <div>
                        <p className={"text-[#555] "}>If You Have a promo code ,Enter it Here</p>
                        <div className={"cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eceaea]"}>
                            <input className={"bg-transparent border-none outline-none pl-[10px] "} type="text" placeholder={"promo code"}/>
                            <button className={"w-[10vw] w-[150px] py-[12px] px-[5px] border-none text-white bg-black rounded-md"}>submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cart;