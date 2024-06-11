// @ts-ignore
import {assets} from "../../assets/assets";

import {StoreContext} from "../../context/StoreContext.tsx";
import {useContext} from "react";

// @ts-ignore
const FoodItem=({id,name,price,description,image})=>{

   // const[itemCount,setItemCount]=useState(0)

    // @ts-ignore
    const{  cartItems, addToCart, removeFromCart,url} =useContext(StoreContext)


    return(
        <div className={"food-item w-[100%] m-auto rounded-[15px]  shadow-md"}>

            <div className={"food-item-img-container relative "}>
                <img className={"food-item-img w-[100%]  rounded-t-md  "} src={url+"/images/"+image} alt=""/>
                {
                    !cartItems[id] ?
                        <img className={"add w-[35px] rounded-[50%]  absolute bottom-[15px] right-[15px] cursor-pointer "} onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>:
                        <div className={"food-item-counter absolute bottom-[15px] right-[15px] flex gap-[10px] p-[6px] rounded-[50px] bg-white"}>
                            <img className={"w-[30px]"} onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                            <p>{cartItems[id]}</p>
                            <img className={"w-[30px]"} onClick={() => addToCart(id)} src={assets.add_icon_green} alt=""/>
                        </div>
                }
            </div>
            <div className={"food-item-info p-[20px]"}>
                <div className={"food-item-name-rating flex justify-between items-center mb-[10px]"}>
                    <p className={"text-[20px] font-[500]"}>{name}</p>
                    <img className={"w-[70px]"} src={assets.rating_starts} alt=""/>
                </div>
                <p className={"food-item-description text-[#676767] text-[12px]"}>{description}</p>
                <p className={"food-item-price text-orange-600 text-[22px] my-[10px] font-[500]"}>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem;