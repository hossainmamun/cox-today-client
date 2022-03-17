import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { contextApi } from '../../App.js';
import '../../Styles/Dashboard.scss'
import AddBlog from './AddBlog.js';
import BookingList from './BookingList.js';
import DashboardHome from './DashboardHome.js';
import ImgUpload from './ImgUpload.js';
import ReviewList from './ReviewList.js';
import RoomListing from './RoomListing.js';
import SpecialOffer from './SpecialOffer.js';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(contextApi)
    const currentLocation = useLocation()
    const today = new Date();

    return (
        <section className='dashboard'>
            <div className='dashboard-header sticky-top'>
                <Link to="/home" class="dashboard-brand">
                    COX<span>TODAY</span>
                </Link>
                <div>
                    <h5 className='text-light'>Date : {today.toLocaleDateString()}</h5>
                    <h5 className='text-light'>Time: {today.toLocaleTimeString()}</h5>
                </div>
            </div>

            {/* ----------- profile section of sidebar ---------- */}
            <div className="row">
                <div className="col-md-2 side-bar p-0">
                    {/* profile status */}
                    <div className="profile-info mt-4">
                        {
                            loggedInUser.email &&
                            <div>
                                <img src={loggedInUser.photo} className="img-fluid" alt="" />
                                <p>{loggedInUser.userName}</p>
                            </div>
                        }
                    </div>

                    {/* ---------- sidebar---------- */}
                    <div className="sidebar-link">
                        <NavLink exact to="/dashboard" className='link' activeClassName='link link-bg'>
                            <i class="fas fa-home"></i>
                            Dashboard
                        </NavLink>

                        <NavLink exact to="/dashboard/room-listing" className='link' activeClassName='link link-bg'>
                            <i class="fas fa-hotel"></i>
                            Room Listing
                        </NavLink>

                        <NavLink exact to="/dashboard/special-room-listing" className='link' activeClassName='link link-bg'>
                            <i class="fas fa-hand-holding-usd"></i>
                            Special Offer
                        </NavLink>

                        <NavLink exact to="/dashboard/add-latest-blog" className='link' activeClassName='link link-bg'>
                            <i class="fas fa-blog"></i>
                            Add Blogs
                        </NavLink>

                        <NavLink exact to="/dashboard/upload-img-gallery" className='link' activeClassName='link link-bg'>
                            <i class="fas fa-file-image"></i>
                            Upload Gallery
                        </NavLink>

                        <NavLink exact to="/dashboard/booking-list" className='link' activeClassName='link link-bg'>
                            <i class="fas fa-suitcase-rolling"></i>
                            Bookings
                        </NavLink>

                        <NavLink exact to="/dashboard/reviews-list" className='link' activeClassName='link link-bg'>
                            <i class="fas fa-comment"></i>
                            Reviews
                        </NavLink>
                    </div>
                    {/* logOut button */}
                    <div className='text-center w-75 m-auto mt-4'>
                        <Link to="/home">
                            {
                                loggedInUser.email &&
                                <button className='btn btn-outline-light rounded-0 w-75' onClick={() => setLoggedInUser({})} >Sign Out</button>
                            }
                        </Link>
                    </div>
                </div>
                <div className="col-md-10">
                    {currentLocation.pathname === '/dashboard' && <DashboardHome />}
                    {currentLocation.pathname === '/dashboard/room-listing' && <RoomListing />}
                    {currentLocation.pathname === '/dashboard/special-room-listing' && <SpecialOffer />}
                    {currentLocation.pathname === '/dashboard/add-latest-blog' && <AddBlog />}
                    {currentLocation.pathname === '/dashboard/upload-img-gallery' && <ImgUpload />}
                    {currentLocation.pathname === '/dashboard/booking-list' && <BookingList />}
                    {currentLocation.pathname === '/dashboard/reviews-list' && <ReviewList />}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;