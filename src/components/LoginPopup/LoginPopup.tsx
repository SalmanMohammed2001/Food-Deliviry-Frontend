import {useState} from "react";
import {assets} from "../../assets/assets";


// @ts-ignore
const LoginPopup=({setShowLogin})=>{
    const[currState,setCurrState]=useState("Login")


    return(
        <div className={"login-popup"}>
            <form action="" className={"login-popup-container"}>
                <div className={"login-popup-title"}>
                    <h2 className={"text-[32px] font-bold"}>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
                </div>

                <div className={"login-popup-input"}>
                    {currState === "Login" ? <></> : <input type="text" placeholder={"Your Name"} required/>}

                    <input type="email" placeholder={"Your Email"} required/>
                    <input type="password" placeholder={"Your Password"} required/>
                </div>

                <button>{currState == "Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condation">
                    <input type="checkbox" required/>
                    <p>By Continuing  i agree to the terms of use  & privacy Policy</p>
                </div>
                {currState === "Login" ? <p>Create a new Account ? <span onClick={()=>setCurrState("Sign Up")}> Click Here</span></p> :
                    <p>Already Have an account ? <span onClick={()=>setCurrState("Login")}> Login here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup;