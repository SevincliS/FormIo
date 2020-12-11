import React, {useState, useEffect} from 'react';
import logo from '../../assets/img/form2_logo.svg'



const HeaderScroll = {
  background: "white",
  boxShadow: "0 12px 34px -11px rgba(65, 62, 101, 0.1)"
}

const Header = () => {
    const [isHeaderScroll, setHeaderScroll] = useState(false)

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
      <ul>
        <li>
          <a href={""}>Product</a>
        </li>
        <li>
        <a href={""}>Pricing</a>
        </li>
        <li>
        <a href={""}>Login</a>
        </li>
        <li>
          <button>Register</button>
        </li>
      </ul>
      </header>
    )
  
}

export default Header

