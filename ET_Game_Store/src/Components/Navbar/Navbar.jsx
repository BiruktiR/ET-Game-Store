import React from 'react';
import './Navbar.css';
import LanguageIcon from '../../assets/Images/Language.png';
import SearchIcon from '../../assets/Images/Search.png';
import HeartIcon from '../../assets/Images/Heart.png';
import CartIcon from '../../assets/Images/Cart.png';
import ProfileIcon from '../../assets/Images/Profile.png';

const Navbar = () => {
  return (
    <>
      <nav className="Top-nav">
        <div className='Top-left'>
          <div className="logo">EGA</div>
          <ul>
            <li><a href="#">STORE</a></li>
            <li><a href="#">Support</a></li>
          </ul> 
        </div> 
        <div className="Top-right">
          <img src={LanguageIcon} alt="Language" />
          <button>Contact Us</button> 
          <img src={ProfileIcon} alt="Profile" />
        </div>
      </nav>
      <nav className="Bottom-nav">
        <div className='Bottom-left'>
          <div className="search">
              <img src={SearchIcon} alt="Search" />   
              <input type="text" placeholder="Search Store" spellCheck="false" />
          </div>
          <ul>
            <li><a href="#">Central</a></li>
            <li><a href="#">Browse</a></li>
          </ul> 
        </div>
        <div className="Bottom-right">
          <img src={HeartIcon} alt="Wishlist" />
          <img src={CartIcon} alt="Cart" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
