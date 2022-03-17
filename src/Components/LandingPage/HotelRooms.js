import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HotelRoomsDisplay from './HotelRoomsDisplay.js';

const HotelRooms = () => {
    const [rooms, setRooms] = useState([]);
    const currentLocation = useLocation();
    useEffect(() => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/hotel-room-list')
            .then(response => response.json())
            .then(data => {
                currentLocation.pathname === '/home' || currentLocation.pathname === '/' ?
                    // const showData = data.slice(0, 6)
                    setRooms(data.slice(0, 6)) :
                    setRooms(data)
            })
    }, [currentLocation.pathname])

    return (
        <section id="rooms" className='hotel-rooms common-heading'>
            <div className="container mb-5">
                {
                    currentLocation.pathname === '/home' || currentLocation.pathname === '/' ?
                        <div className='heading'>
                            <h2>Our <span>Rooms</span></h2>
                            <h5>we provide the best room in the world</h5>
                        </div> :
                        <div className='heading' >
                            <h2>Our All <span>Rooms</span></h2>
                        </div>
                }
            </div>

            <div className='container'>
                <div className='text-center mb-4'>
                    {
                        rooms.length === 0 &&
                        <div>
                            <h3>Loading...</h3>
                        </div>
                    }
                </div>
                <div className="row">
                    {
                        rooms.map(room => <HotelRoomsDisplay room={room} key={room._id} />)
                    }
                </div>
                <div className='mt-5'>
                    {
                        currentLocation.pathname === '/home' || currentLocation.pathname === '/' ?
                            <Link to="/all-rooms-list">
                                <button className='btn btn-outline-dark rounded-0 px-4'>ALL ROOMS</button>
                            </Link>
                            :
                            ''
                    }
                </div>
            </div>
        </section>
    );
};

export default HotelRooms;