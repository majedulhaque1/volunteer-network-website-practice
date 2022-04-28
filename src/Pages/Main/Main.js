import React, { useEffect, useState } from 'react';
import './Main.css';
const Main = () => {
    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])
    return (
        <div className='main-container'>
            <div className='main-banner'>
                <h1>I grow by helping people in need.</h1>
                <div className='banner-search'>
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
            <div className='main'>
                {
                    peoples.map(people => <div className='main-item' key={people.id}>
                        <img src={people.img} alt="" />
                        <h2>{people.name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Main;