import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import SignUp from "./pages/login/SignUp";
import Login from "./pages/login/Login";
import Seller from "./pages/Sell/Seller";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/Login" element={<Login />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/Sell" element={<Seller/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
