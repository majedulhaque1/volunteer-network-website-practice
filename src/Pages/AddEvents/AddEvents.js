import React from 'react';
import './AddEvents.css';
import useEvents from '../../hooks/useEvents';

const AddEvents = () => {
    const [events, setEvents] = useEvents();
    const handleAddEvents = (e) =>{
        e.preventDefault();
        const name = e.target.eventTitle.value;
        const description = e.target.description.value;
        const img = e.target.imgurl.value;

        const event = {name, description, img};

        fetch('https://sleepy-eyrie-79904.herokuapp.com/addevents',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(event),
        })
        .then(res => res.json())
        .then(data => {
            setEvents(data);
            e.target.reset();
        })
    }
    return (
        <div className='events-container'>
            <aside className='sidebar'>
                {/* <img src="" alt="" /> */}
                <h2>Volunteer Resister List</h2>
                <h2>+ Add Events</h2>
                <h2>+ Add People</h2>
            </aside>
            <section className='form-section'>
                <h2 className='form-title'>Add Events</h2>
                <form onSubmit={handleAddEvents} className='event-form'>
                    <div className='form-left'>
                        <label htmlFor="">Event Title</label>
                        <br />
                        <input type="text" name='eventTitle' placeholder='Event Title' />
                        <br />
                        <label htmlFor="description">Description</label>
                        <br />
                        <textarea name="description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className='form-right'>
                        <label htmlFor="">Date</label>
                        <br />
                        <input type="text" placeholder='Date' />
                        <br />
                        <input type="text" name='imgurl' placeholder='Img Url'/>
                        <br />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddEvents;