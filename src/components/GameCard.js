import React from 'react';  
import './GameCard.css';  

function GameCard({ name, image }) {  
    return (  
        <div className="game-card">  
            <img src={image} alt={name} />  
            <div className="game-info">  
                <h3>{name}</h3>  
                <button>Preview</button>  
            </div>  
        </div>  
    );  
}  

export default GameCard;