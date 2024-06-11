// @ts-ignore
import {assets} from '../../assets/assets.js'
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {StoreContext} from "../../context/StoreContext.tsx";

// @ts-ignore
const NavBar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    // @ts-ignore
    const {getTotalAmount, token, setToken} = useContext(StoreContext)

    const navigate=useNavigate()
    const logOut=()=>{
        localStorage.removeItem('token')
        setToken("");
        navigate("/")
    }

    return (

        <div className={"container  navbar py-[20] flex items-center justify-between"}>
            <Link to={"/"}> <img src={assets.food_logo} alt="" className={"w-[100px] h-[100px] logo"}/> </Link>

            <ul className={" navbar-menu gap-[20px] text-[#49557e] text-[14px] cursor-pointer hidden  md:flex"}>
                <Link to={"/"} onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>home</Link>
                <a href={'#explore-menu'} onClick={() => setMenu("menu")}
                   className={menu == "menu" ? "active" : ""}>menu</a>
                <a href={'#app-download'} onClick={() => setMenu("mobile-app")}
                   className={menu == "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href={'#footer'} onClick={() => setMenu("contact-us")}
                   className={menu == "contact-us" ? "active" : ""}>contact-us</a>
            </ul>
            <div className={"navbar-right  flex  items-center gap-[20px] "}>
                <img className={""} src={assets.search_icon} alt=""/>
                <div className={"relative  nav-bar-search-icon"}>
                    <Link to={'/cart'}> < img src={assets.basket_icon} alt=""/> </Link>
                    <div
                        className={getTotalAmount() === 0 ? "" : " dot absolute min-w-[10px] min-h-[10px] bg-orange-600  rounded-[50px] top-[-8px] right-[-8px]"}></div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}
                                  className={"transition-all ease-in-out bg-transparent text-[16px] color-[#49557e]  bd border-orange-600 py-[10px] px-[30px] rounded-[50px]  cursor-pointer hover:bg-[#fff4f2] hover:text-orange-400"}>sign
                    in
                </button> : <div className={"navbar-profile relative"}>
                    <img src={assets.profile_icon} alt=""/>
                    <ul className={"nav-profile-dropdown  absolute right-0 z-10 hidden "}>
                        <li><img src={assets.basket_icon} alt=""/>Order</li>
                        <hr/>
                        <li onClick={logOut}><img src={assets.logout_icon} alt=""/>LogOut</li>
                    </ul>
                </div>}

            </div>
        </div>

    )

}
export default NavBar;