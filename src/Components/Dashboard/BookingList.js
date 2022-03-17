import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../Styles/CommonListing.scss'
import BookingListTable from './BookingListTable.js';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const currentLocation = useLocation();

    useEffect(() => {
        loadBookingList()
    }, [])

    const loadBookingList = () => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/booking-list')
            .then(response => response.json())
            .then(data => {
                setBookingList(data)
            })
    }
    return (
        <section className='booking-list'>
            {
                currentLocation.pathname === '/dashboard/booking-list' &&
                <div>
                    <div className='header-section'>
                        <h3>booking list</h3>
                        <strong>Total Booking: {bookingList.length}</strong>
                        <h5>dashboard/booking-list</h5>
                    </div>

                    <div className='text-center mb-4'>
                        {
                            bookingList.length === 0 &&
                            <div>
                                <h3>Loading...</h3>
                            </div>
                        }
                    </div>
                </div>
            }

            <div>
                <BookingListTable bookingList={bookingList} loadBookingList={loadBookingList} />
            </div>
        </section>
    );
};

export default BookingList;