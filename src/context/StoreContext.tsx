import {createContext, useEffect, useState} from "react";
// @ts-ignore
import {food_list} from "../assets/assets";

export const StoreContext = createContext(null)

// @ts-ignore
const StoreContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState({})
    const [token,setToken]=useState("")

    const url="http://localhost:4000";
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


    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            let itemInfo= food_list.find((product: { _id: any; })=> product._id === item);
            // @ts-ignore
            totalAmount=+ itemInfo.price * cartItems[item]
        }

        return totalAmount;
    }

    useEffect(()=>{
        if (localStorage.getItem('token')){
            setToken(localStorage.getItem('token')!)
        }
    },[])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        setToken


    }
    // @ts-ignore
    // @ts-ignore
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider