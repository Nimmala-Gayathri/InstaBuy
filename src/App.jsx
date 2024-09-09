import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Logo from "./assets/logo.png"
import cartButton from "./assets/cartButton.png"
import back from "./assets/back.png"

import Home from './componets/Home';
import Login from './componets/Login';
import Signup from './componets/Signup';
import ProductGallery from './componets/ProductGallery';
import ProductDetails from './componets/ProductDetails';
import Cart from './componets/Cart';
import Checkout from './componets/Checkout';


function App() {
  const [user, setUser] = useState("")
  const [cartItem, setCartItem] = useState({})
  const [normalStage,setNormalStage] = useState('')
  const navigate = useNavigate()
  const handleAddCart = (item) =>{
    setCartItem({...cartItem, ...item})

  }

  useEffect (() =>{
    const userEmail = localStorage.getItem('UserEmail')
    if(userEmail){
      setUser(userEmail)
    }
  },[])
  return (
      <div>
        <Navbar className='page1'>
            <Navbar.Brand onClick={() => navigate("/")} style={{color:"#216ad9",fontSize:"1.7rem",fontWeight:"bolder"}}>
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{marginTop:"7px"}}
            />{' '}
            InstaBuy!
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              {user && <Button onClick={() => {
                navigate("/cart")
              }} 
                
                style={{backgroundColor:"white",border:"none",width:"5rem"}}> <img src={cartButton} style={{width:"2.5rem"}}/> &nbsp; {Object.keys(cartItem).length > 0  && (<Badge bg='success'> {Object.keys(cartItem).length}</Badge>)}</Button>}
              <Button  onClick={() => navigate("./login")} style={{width:"7rem"}} >{user ? "Logout" : "Login"}</Button>
              {user && <img src={back} style={{width:"2.5rem",marginLeft:"0.5rem"}} onClick={() =>navigate("/products")}/>}
           </Navbar.Collapse>
         </Navbar>
         <Routes>
          <Route path='/' element = {<Home user={user}/>} />
          <Route path='/login' element= {<Login  setUser= {setUser}/>}/>
          <Route path='/signup' element={<Signup  setUser= {setUser}/>}/>
          <Route path='/products' element= {<ProductGallery/>}/>
          <Route path='/PDetails/:id' element = {<ProductDetails handleAddCart ={ handleAddCart} cartItems={cartItem } />}/>
          <Route path='/checkout' element= {<Checkout/>}/>
          <Route path='/cart' element = {<Cart  cartItems={cartItem }/>}/>
         </Routes>
        {/* <Home/> */}
        {/* <Login/> */}
        {/* <Signup /> */}
      </div>
  )
}


export default App
