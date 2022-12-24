import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home"
import About from "./Pages/About/About";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import DetailService from "./Pages/DetailService/DetailService";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Form/Login/Login";
import Register from "./Pages/Form/Register/Register";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import RequerAuth from "./Pages/Form/RequerAuth/RequerAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <RequerAuth>
            <Home/>
          </RequerAuth>
        }></Route>
        <Route path="/home" element={
           <RequerAuth>
           <Home/>
         </RequerAuth>
        }></Route>
        <Route path="/service/:id" element={<DetailService/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/checkout" element={
          <RequerAuth>
            <Checkout/>
          </RequerAuth>
        }></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
