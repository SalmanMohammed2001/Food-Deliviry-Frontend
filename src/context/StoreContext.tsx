import {createContext} from "react";
// @ts-ignore
import {food_list} from "../assets/assets";

export const  StoreContext =createContext(null)

// @ts-ignore
const StoreContextProvider = ({children}) => {

    const contextValue={
            food_list
    }
    // @ts-ignore
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider