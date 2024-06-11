
import './App.css'
import NavBar from "./components/navbar/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import PlaceOrder from "./pages/PlaceOrder/PlacerOrder.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {useState} from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup.tsx";
import Verify from "./pages/verify/Verify.tsx";

function App() {

    const[showLogin,setShowLogin]=useState(false)




  return (
      <>
          {showLogin? <LoginPopup setShowLogin={setShowLogin} /> :<></>}
          <div className={'app'}>
              <NavBar setShowLogin={setShowLogin} />
              <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/cart"} element={<Cart/>}/>
                  <Route path={"/order"} element={<PlaceOrder/>}/>
                  <Route path={"/verify"} element={<Verify/>}/>
              </Routes>
          </div>
          <Footer/>

          </>


  )
}

export default App
