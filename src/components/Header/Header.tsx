const Header = () => {
    return (
        <div className={"header w-full relative"}>
            <div className="header-contant text-white w-full p-5 md:p-0 relative bottom-0   md:absolute md:bottom-[10%] md:left-[6vw] flex flex-col items-start md:max-w-[50%] gap-[1.5vw]">
                <h2 className={" text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px] xl:text-[70px] xl:leading-[80px]  font-bold "}>Order Your Favourite food here </h2>
                <p className={"text-[8px] md:text-[1vw] lg:text-[1vw]"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem cum dolorem eos esse ex,
                    harum in maxime natus obcaecati, quae, quam quasi </p>
                <button className={"text-[8px] sm:text-[12px] md:text-[18px] text-[#747474] font-[500] py-2 px-4 rounded-[50px] bg-white"}>View Menu</button>
            </div>
        </div>
    )
}
export default Header