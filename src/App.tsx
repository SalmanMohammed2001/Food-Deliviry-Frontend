
import './App.css'
import NavBar from "./components/navbar/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import PlaceOrder from "./pages/PlaceOrder/PlacerOrder.tsx";

function App() {




  return (
        <div className={'app'}>
          <NavBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"/order"} element={<PlaceOrder/>}/>
            </Routes>
        </div>
  )
}

export default App
