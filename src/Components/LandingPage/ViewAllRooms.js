import React from 'react';
import Navigation from '../Reuse/Navigation.js';
import HotelRooms from './HotelRooms.js';
import LatestOffer from './LatestOffer.js';

const ViewAllRooms = () => {
    return (
        <div>
            <Navigation/>
            <HotelRooms/>
            <LatestOffer/>
        </div>
    );
};

export default ViewAllRooms;