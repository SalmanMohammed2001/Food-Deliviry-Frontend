const Header = () => {
    return (
        <div className={"header w-full relative"}>
            <div className="header-content text-white bottom-[-25%] sm:bottom-[-25%]  w-full p-5 md:p-0 relative    md:absolute md:bottom-[10%] md:left-[6vw] flex flex-col items-start md:max-w-[50%] gap-[1.5vw]">
                <h2 className={" text-[12px]  sm:text-[24px] md:text-[28px] lg:text-[40px] xl:text-[70px] xl:leading-[80px]  font-bold "}>Order Your Favourite food here </h2>
                <p className={"text-[8px] hidden md:flex md:text-[1vw] lg:text-[1vw]"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem cum dolorem eos esse ex,
                    harum in maxime natus obcaecati, quae, quam quasi </p>
                <button className={"text-[8px] py-1 px-1 sm:text-[12px] md:text-[18px] text-[#747474] font-[500] sm:py-2 sm:px-4 rounded-[50px] bg-white"}>View Menu</button>
            </div>
        </div>
    )
}
export default Header