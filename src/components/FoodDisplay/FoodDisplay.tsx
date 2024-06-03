import {Key, useContext} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";
import FoodItem from "../FoodItem/FoodItem.tsx";


const FoodDisplay = ({category}) => {

    // @ts-ignore
    const {food_list} = useContext(StoreContext)


    return (
        <div className={"food-display "}>
            <h2>Top dishes near you</h2>
            <div className={"food-display-list"}>
                {food_list.map((item: { _id: any; name: any; price: any; description: any; image: any; }, index: Key | null | undefined) => {
                    return <FoodItem key={index} id={item._id} name={item.name} price={item.price}
                                     description={item.description} image={item.image}/>
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;