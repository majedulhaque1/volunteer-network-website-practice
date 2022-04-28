import {useState, useEffect} from 'react';
const useEvents = () =>{
    const [events, setEvents] = useState([]);

    useEffect( () =>{
        fetch('https://sleepy-eyrie-79904.herokuapp.com/addevents')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return [events, setEvents];
}

export default useEvents;