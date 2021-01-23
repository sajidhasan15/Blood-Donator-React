import React from 'react';
import './Home.css';
import DataSubmit from '../DataSubmit/DataSubmit';
function Home() {
    return (
        <div className="homepage">
            <header>
                <h1>Blood <span>Donator</span> </h1>
                <nav>
                <ul >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Donation List</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About</a></li>
                </ul> 
            </nav> 
            </header>
            
            
            <DataSubmit />
        </div>
    )
}

export default Home
