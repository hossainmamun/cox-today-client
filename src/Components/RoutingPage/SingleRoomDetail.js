import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Reuse/Navigation.js';
import SingleRoomDisplay from './SingleRoomDisplay.js';

const SingleRoomDetail = () => {
    const { roomId } = useParams();
    const [singleRoom, setSingleRoom] = useState({});

    useEffect(() => {
        singleRoomLoading();
    }, [])
    const singleRoomLoading = () => {
        fetch(`https://shrouded-fortress-44891.herokuapp.com/hotel-room-list/${roomId}`)
            .then(response => response.json())
            .then(data => {
                setSingleRoom(data)
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section>
            <Navigation />
            <div className="container mt-5">
                <SingleRoomDisplay singleRoom={singleRoom} />
            </div>
        </section>
    );
};

export default SingleRoomDetail;