import React, { useContext, useState,useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'
import  nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(Shopcontext);
    const menuRef=useRef();
    const dropdown_toggle=(e)=>{
      //menuRef.current holds the actual DOM node of the element to which the ref is attached.
        menuRef.current.classList.toggle('nav-menu-visible');// classList.toggle() method is used to:
        // Add a class to an element if it doesn't exist.
        // Remove the class if it does exist.
        
        e.target.classList.toggle('open');//e.target refers to the element that triggered the event (e.g., the button).
    }
    // console.log("Testing getTotalCartItems:", getTotalCartItems());
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo}alt="" />
        <p>Shopper</p>

      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}}  to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {/* The given code snippet renders a navigation section where the user sees either a Login button or a Logout button, depending on whether the user is authenticated (i.e., whether an authentication token exists in localStorage). */}
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>// Redirect to homepage after deleting authentication token
        :<Link to='/login'><button>Login</button></Link>}
        
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
