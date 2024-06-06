import {useContext} from "react";
import  {StoreContext} from "../../context/StoreContext.tsx";


const Cart=()=>{

    const {cartItems,food_list,removeFromCart}=useContext(StoreContext)


    return(
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
                    food_list.map((item,index)=>{
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

        </div>
    )
}
export default Cart;