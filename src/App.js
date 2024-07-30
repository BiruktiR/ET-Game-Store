import React from 'react';  
import Header from './components/Header';  
import Footer from './components/Footer';  
import SearchBar from './components/SearchBar';  
import GameCard from './components/GameCard';  
import DealCard from './components/DealCard';  
import './App.css';

function App() {  
    const deals = [  
        { id: 1, name: 'Dartboard', image: '/assets/dartboard.jpg' },  
        { id: 2, name: 'Playing Cards', image: '/assets/cards.jpg' }  
    ];  

    return (  
        <div className="App">  
            <Header />  
            <SearchBar />  
            <div className="category">  
                <h2>Central</h2>  
                <GameCard name="Chess" image="/assets/chess.jpg" />  
            </div>  
            <section className="deals">  
                <h2>Deal of The Week</h2>  
                {deals.map(deal => (  
                    <DealCard key={deal.id} name={deal.name} image={deal.image} />  
                ))}  
            </section>  
            <Footer />  
        </div>  
    );  
}  

export default App;