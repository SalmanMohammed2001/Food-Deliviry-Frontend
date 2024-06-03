import {Key, useContext} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";
import FoodItem from "../FoodItem/FoodItem.tsx";


const FoodDisplay = ({category}) => {

    // @ts-ignore
    const {food_list} = useContext(StoreContext)


    return (
        <div className={"food-display mt-[30px]"}>
            <h2 className={"text-2xl font-bold "}>Top dishes near you</h2>
            <div className={"food-display-list grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[30px]"}>
                {food_list.map((item: { _id: any; name: any; price: any; description: any; image: any; }, index: Key | null | undefined) => {
                    return <FoodItem key={index} id={item._id} name={item.name} price={item.price}
                                     description={item.description} image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;