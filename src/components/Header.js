import React from 'react';  
import './Header.css';  

function Header() {  
    return (  
        <header className="header">  
            <div className="logo">EGA</div>  
            <nav>  
                <ul>  
                    <li><a href="#">Store</a></li>  
                    <li><a href="#">Support</a></li>  
                </ul>  
            </nav>  
            <button className="contact">Contact us</button>  
        </header>  
    );  
}  

export default Header;