import React, { useEffect, useState } from 'react';
import BookingList from './BookingList.js';
import ReviewList from './ReviewList.js';

const DashboardHome = () => {
    const total_room = 250;
    const [bookingList, setBookingList] = useState([]);
    const [reviewList, setReviewList] = useState([]);
    useEffect(() => {
        loadBookingList();
        loadReviewList();
    }, [])

    const loadBookingList = () => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/booking-list')
            .then(response => response.json())
            .then(data => {
                setBookingList(data)
            })
    }
    const loadReviewList = () => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/client-reviews')
            .then(response => response.json())
            .then(data => {
                setReviewList(data)
            })
    }

    return (
        <section className='dashboard-home'>
            <div className='header-section'>
                <h3>Dashboard</h3>
                <h5>dashboard/dashboard-home</h5>
            </div>

            <div className="container mb-5 mt-3">
                <div className='row'>
                    <div className="col-md-4">
                        <div className="card text-center text-capitalize py-3 bg-danger">
                            <i class="fas fa-address-card" style={{ color: '#fff', fontSize: '46px' }}></i>
                            <h4 className='fw-bolder text-light mt-3'>Total Bookings</h4>
                            <h3 className='mb-0 text-light'>{bookingList.length}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center text-capitalize py-3 bg-warning">
                            <i class="fas fa-hotel" style={{ color: '#fff', fontSize: '46px' }}></i>
                            <h4 className='fw-bolder text-light mt-3'>Available Bookings</h4>
                            <h3 className='mb-0 text-light'>{`${total_room - bookingList.length}`}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center text-capitalize py-3 bg-success">
                            <i class="fas fa-comments" style={{ color: '#fff', fontSize: '46px' }}></i>
                            <h4 className='fw-bolder text-light mt-3'>Total Reviews</h4>
                            <h3 className='mb-0 text-light'>{`${reviewList.length}`}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center mb-4'>
                {
                    bookingList.length === 0 &&
                    <div>
                        <h3>Loading...</h3>
                    </div>
                }
            </div>

            <div>
                <div>
                    <h3 className='mt-5 fw-bolder'>Booking List</h3>
                    <BookingList></BookingList>
                    <h3 className='mt-5 fw-bolder'>Review List</h3>
                    <ReviewList />
                </div>
            </div>
        </section>
    );
};

export default DashboardHome;