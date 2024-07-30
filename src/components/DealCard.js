import React from 'react';  
import './DealCard.css'; 

function DealCard({ name, image }) {  
    return (  
        <div className="deal-card">  
            <img src={image} alt={name} />  
            <h3>{name}</h3>  
        </div>  
    );  
}  

export default DealCard;