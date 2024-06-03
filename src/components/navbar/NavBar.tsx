// @ts-ignore
import {assets} from '../../assets/assets.js'
import {useState} from "react";

const NavBar = () => {

    const [menu,setMenu]=useState("home");

    return (

        <div className={" container py-[20] flex items-center justify-between"}>
            <img src={assets.food_logo} alt="" className={"w-[100px] h-[100px]"}/>
            <ul className={"flex gap-[20px] text-[#49557e] text-[14px] cursor-pointer "}>
                <li onClick={()=>setMenu("home")}   className={menu=="home" ? "active" :""} >home</li>
                <li onClick={()=>setMenu("menu")}  className={menu=="menu" ? "active" :""}>menu</li>
                <li onClick={()=>setMenu("mobile-app")}  className={menu=="mobile-app" ? "active" :""}>mobile-app</li>
                <li onClick={()=>setMenu("contact-us")}  className={menu=="contact-us" ? "active" :""}>contact-us</li>
            </ul>
            <div className={"flex  items-center gap-[20px]"}>
                <img src={assets.search_icon} alt=""/>
                <div className={"relative "}>
                    <img src={assets.basket_icon} alt=""/>
                    <div className={"absolute min-w-[10px] min-h-[10px] bg-orange-600  rounded-[50px] top-[-8px] right-[-8px]"}></div>
                </div>
                <button
                    className={ "transition-all ease-in-out bg-transparent text-[16px] color-[#49557e]  bd border-orange-600 py-[10px] px-[30px] rounded-[50px]  cursor-pointer hover:bg-[#fff4f2] hover:text-orange-400" }>sign
                    in
                </button>
            </div>
        </div>

    )

}
export default NavBar;