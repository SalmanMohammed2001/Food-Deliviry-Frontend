import {createContext, useEffect, useState} from "react";
import axios from "axios";
// @ts-ignore


export const StoreContext = createContext(null)

// @ts-ignore
const StoreContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState({})
    const [token,setToken]=useState("")
    const[food_list,setFoodList]=useState([])



    const url="http://localhost:4000";
    const addToCart = async (itemId: string | number) => {
        // @ts-ignore
        if (!cartItems[itemId]) {
            setCartItems((prevState) => ({...prevState, [itemId]: 1}))
        } else {
            // @ts-ignore
            setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] + 1}))
        }

        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromCart =async (itemId: string | number) => {
        // @ts-ignore
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] - 1}))

        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
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

    const fetchFoodList= async ()=>{
        const response =await  axios.get(`${url+"/api/food/list"}`)
        setFoodList(response.data.data)

    }


    const loadCartData=async  (token:any)=>{
        const response= await axios.get(url+"/api/cart/get",{headers:{token}})
        setCartItems(response.data.cartData)

    }


    useEffect(()=>{
        if (localStorage.getItem('token')){
            setToken(localStorage.getItem('token')!)
        }
        fetchFoodList().then()
        loadCartData(localStorage.getItem('token')).then()
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