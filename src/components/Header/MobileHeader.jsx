import React, {useState, useEffect} from 'react';
import logo from '../../assets/img/form2_logo.svg'
import {HamburgerIcon, CloseIcon} from '../../assets/icon/Icon'



const HeaderScroll = {
  background: "white",
  boxShadow: "0 12px 34px -11px rgba(65, 62, 101, 0.1)"
}

const Header = () => {
    const [isHeaderScroll, setHeaderScroll] = useState(false)

    const [isMenuOpen, setMenuOpen] = useState(false)
    const toggle = () =>  setMenuOpen(!isMenuOpen)

      const listenScrollEvent = (event) => {
      if (window.scrollY > 30) {
        setHeaderScroll(true)
      } else {
        setHeaderScroll(false)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);

   

    return(
      <header style={isHeaderScroll ? HeaderScroll : null}>
      <img src={logo} alt={"form2-logo"}/>
      <button className={"hamburger-menu-button"} onClick={() => {toggle()}}>{isMenuOpen ?<CloseIcon/> :<HamburgerIcon /> }</button>
      { isMenuOpen ? <div className={"hamburger-menu"}> <ul >
      <li className={"hamburger-menu-user"}>
          <button>Login</button>
          <button>Register</button>
        </li>
        <li>
          <a href={""}>Product</a>
        </li>
        <li>
        <a href={""}>Pricing</a>
        </li>
        
      </ul> </div> : null }
      </header>
    )
  
}

export default Header

