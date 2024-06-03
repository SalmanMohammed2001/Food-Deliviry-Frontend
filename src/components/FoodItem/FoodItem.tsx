// @ts-ignore
import {assets} from "../../assets/assets";

// @ts-ignore
const FoodItem=({id,name,price,description,image})=>{
    return(
        <div className={"food-item w-[100%] m-auto rounded-[15px]  shadow-md"}>
            <div className={"food-item-img-container"}>
                <img className={"food-item-img w-[100%]  rounded-t-md  "} src={image} alt=""/>
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