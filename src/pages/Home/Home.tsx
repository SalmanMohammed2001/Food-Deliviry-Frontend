import Header from "../../components/Header/Header.tsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.tsx";
import {useState} from "react";


const Home=()=>{
    const[category,setCategory]=useState("All")
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory} />
        </div>
    )
}

export default  Home;