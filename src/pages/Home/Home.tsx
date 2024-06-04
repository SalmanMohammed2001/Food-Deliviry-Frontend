import Header from "../../components/Header/Header.tsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.tsx";
import {useState} from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.tsx";
import AppDownload from "../../components/AppDownload/AppDownload.tsx";


const Home=()=>{
    const[category,setCategory]=useState("All")
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
            <AppDownload/>
        </div>
    )
}

export default  Home;