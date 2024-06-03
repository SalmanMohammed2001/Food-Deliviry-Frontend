import {createContext, useState} from "react";
// @ts-ignore
import {food_list} from "../assets/assets";

export const StoreContext = createContext(null)

// @ts-ignore
const StoreContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId: string | number) => {

        // @ts-ignore
        if (!cartItems[itemId]) {
            setCartItems((prevState) => ({...prevState, [itemId]: 1}))
        } else {
            // @ts-ignore
            setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId: string | number) => {
        // @ts-ignore
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] - 1}))
    }


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    // @ts-ignore
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider