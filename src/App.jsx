import React,{ useEffect, useState } from "react"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from "./components/TopProducts/TopProducts"
import Banner from "./components/Banner/Banner"
import Subscribe from "./components/Subscribe/Subscribe"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import Popup from "./components/Popup/Popup"

function App() {
  const [orderPopUp,setOrderPopUp] = useState(false)

  const handleOrderPopUp = ()=>{
    setOrderPopUp(!orderPopUp)
  }

  React.useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 800,
      easing : 'ease-in-sine',
      delay : 100
    });
    AOS.refresh()

  },[])
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopUp={handleOrderPopUp}/>
      <Hero handleOrderPopUp={handleOrderPopUp}/>
      <Products />
      <TopProducts  handleOrderPopUp={handleOrderPopUp}/>
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
    </div>
  )
}

export default App
