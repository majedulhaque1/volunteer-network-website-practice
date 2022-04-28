import React from 'react';
import './Events.css';
import useEvents from '../../hooks/useEvents';
const Events = () => {
    const [events, setEvents] = useEvents();
    const handleDelete = (id) =>{
        const url = `http://localhost:5000/addevents/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = events.filter(event => event._id !== id);
            setEvents(remaining);
        })
    }
    return (
        <div className='event-container'>
            {
                events.map(event => <div className='event' key={event._id}>
                    <img src={event.img} alt="" />
                    <div>
                        <h2>{event.name}</h2>
                        <button onClick={() => handleDelete(event._id)}>Cancel</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Events;