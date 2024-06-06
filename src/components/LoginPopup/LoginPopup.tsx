import {useState} from "react";
// @ts-ignore
import {assets} from "../../assets/assets";


// @ts-ignore
const LoginPopup=({setShowLogin})=>{
    const[currState,setCurrState]=useState("Login")


    return(
        <div className={"login-popup absolute z-20 w-[100%] h-[100%] bg-[#00000090] grid"}>
            <form action="" className={"login-popup-container "}>
                <div className={"login-popup-title flex justify-between items-center text-black"}>
                    <h2 className={"text-[32px] font-bold"}>{currState}</h2>
                    <img className={"w-[16px] cursor-pointer"} onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
                </div>

                <div className={"login-popup-input flex flex-col gap-[20px]"}>
                    {currState === "Login" ? <></> : <input className={"outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md  "} type="text" placeholder={"Your Name"} required/>}

                    <input  className={"outline-none  p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md  "} type="email" placeholder={"Your Email"} required/>
                    <input  className={"outline-none   p-[10px] border-[#c9c9c9] border-2 border-solid rounded-md "} type="password" placeholder={"Your Password"} required/>
                </div>

                <button className={"border-none p-[10px] text-white bg-orange-600 text-[14px] cursor-pointer rounded-md"}>{currState == "Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condation flex items-start gap-[8px] mt-[-15x]">
                    <input type="checkbox" className={"mt-[5px]"} required/>
                    <p className={"text-[11px]"}>By Continuing  i agree to the terms of use  & privacy Policy</p>
                </div>
                {currState === "Login" ? <p className={"text-[13px]"}>Create a new Account ? <span className={"text-orange-600 font-[500] cursor-pointer "} onClick={()=>setCurrState("Sign Up")}> Click Here</span></p> :
                    <p className={"text-[13px]"}>Already Have an account ? <span className={"text-orange-600 font-[500] cursor-pointer "} onClick={()=>setCurrState("Login")}> Login here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup;