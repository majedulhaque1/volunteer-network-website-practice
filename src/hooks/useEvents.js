import {useState, useEffect} from 'react';
const useEvents = () =>{
    const [events, setEvents] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/addevents')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return [events, setEvents];
}

export default useEvents;