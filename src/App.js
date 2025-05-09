import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Router, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductModel from "./Components/ProductModel";

const MyContext = createContext();

function App() {

  const [countryList,setCountryList] = useState([]);
  const [selectedCountry,setselectedCountry] = useState('');
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[]);

  const getCountry= async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data);
      
      
    })
  }

  const values ={
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
  }

  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>    
    <Header />
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
    </Routes>
    <Footer/>
        {
          isOpenProductModal===true && <ProductModel/>
        }
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};