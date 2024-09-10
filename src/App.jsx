import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import MyNavbar from './components/Navbar/Navbar';
import ProductSection from './components/Product/Product';
import ProductMain from './components/ProductMain/ProductMain';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
         <MyNavbar />  
         <ProductMain/>
         <ProductSection />   
     <Footer />
    </>
  )
}

export default App
