// @ts-ignore
import {assets} from "../../assets/assets";


const  AppDownload=()=>{
    return(
        <div className={"app-download m-auto mt-[100px] text-[25px] md:text-[34px] font-bold text-center"} id={'app-download'}>
            <p>For Better Experience Download <br/> Food App </p>
            <div className={"app-download-platforms flex-col sm:flex-row flex items-center justify-center gap-[20px] mt-[40px]"}>
                <img  className={"max-w-[180px]  cursor-pointer "} src={assets.play_store} alt=""/>
                <img className={"max-w-[180px] w-max-[30vw,120px]  cursor-pointer "} src={assets.app_store} alt=""/>
            </div>

        </div>
    )
}
export default AppDownload;