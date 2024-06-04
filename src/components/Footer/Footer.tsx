// @ts-ignore
import {assets} from "../../assets/assets";

const Footer = () => {
    return (
        <div className={"footer text-[#d9d9d9] bg-[#323232] flex gap-[20px] flex-col items-center py-[20px] px-[8vw] pt-[80px] mt-[100px] "} id={'footer'}>
            <div className={"footer-content w-[100%] grid md:grid-cols-2 lg:grid-cols-3 gap-[80px] mb-0 "}>
                <div className={"footer-content-left   "}>
                    <img src={assets.food_logo} alt=""/>

                    <div className={"footer-social-icon flex mt-5  w-[40px] gap-[40px]"}>
                        <img src={assets.facebook_icon} alt=""/>
                        <img src={assets.twitter_icon} alt=""/>
                        <img src={assets.linkedin_icon} alt=""/>
                    </div>
                </div>

                <div className={"footer-content-center  "}>
                    <h2 className={"text-[24px] font-bold mb-2"}>Company</h2>
                    <ul>
                        <li className={"mb-[10px]"}>Home</li>
                        <li className={"mb-[10px]"}>About us</li>
                        <li  className={"mb-[10px]"}>Delivery</li>
                        <li  className={"mb-[10px]"}>Privacy Policy</li>
                    </ul>
                </div>

                <div className={"footer-content-right flex flex-col md:items-center  gap-[20px]"}>
                    <h2 className={"text-[24px] font-bold mb-2 text-white"} >GET IN TOUCH</h2>

                    <ul>
                        <li className={"mb-[10px]"}>+1-212-665-7896</li>
                        <li className={"mb-[10px]"}>abc@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className={"w-[100%] h-2 my-[20px] bg-gray"}/>
            <p className={"footer-copyright"}> Copyright 2024 @ Food.com - All Right Reserved </p>

        </div>
    )
}
export default Footer