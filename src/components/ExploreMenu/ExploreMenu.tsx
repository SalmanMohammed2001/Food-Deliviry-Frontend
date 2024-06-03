
// @ts-ignore
import  {menu_list} from "../../assets/assets";

const ExploreMenu=({category,setCategory})=>{
    return(
        <div className={"explore-menu my-[20px] flex flex-col gap-[20px] "} id={'explore-menu'}>
                <h1 className={"text-[24px] text-[#262626] font-bold "}>Explore Menu</h1>
            <p className={"explore-menu-text  md:max-w-[60%]  text-[#808080] "}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid distinctio dolor necessitatibus voluptatem. Assumenda autem, corporis deserunt earum facilis illum</p>
            <div className={"explore-menu-list flex justify-between items-center gap-[30px] text-center  my-[20px] overflow-x-scroll "}>
                {
                    menu_list.map((item:any,index:any)=>{
                        return(
                            <div onClick={()=>setCategory((prev: any)=>prev==item.menu_name ?"All": item.menu_name)}  key={index} className={"explore-menu-list-item"}>
                                <img className={category==item.menu_name ?"border-2 border-solid border-orange-600 p-[2px] rounded-[100%]": "w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50px] transition-[0.2s]"} src={item.menu_image} alt=""/>
                                <p className={"mt-[10px] text-[#747474] cursor-pointer"}>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className={"my-[10px] h-[2px] bg-[#e2e2e2] border-none"}/>
        </div>
    )
}

export default  ExploreMenu;