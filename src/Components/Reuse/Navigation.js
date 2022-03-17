import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { contextApi } from '../../App.js';
import '../../Styles/Navigation.scss';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(contextApi)
    return (
        <section className='navigation sticky-top'>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <Link to="/home" class="navbar-brand">COX<span>TODAY</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <HashLink to="/#hero" class="nav-link">home</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to="/home#rooms" class="nav-link">rooms</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to="/home#about" class="nav-link">about</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to="/home#gallery" class="nav-link">Gallery</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink to="/home#blogs" class="nav-link">Blogs</HashLink>
                            </li>
                            {
                                loggedInUser.email &&
                                <li class="nav-item">
                                    <Link to="/dashboard" class="nav-link">Dashboard</Link>
                                </li>
                            }
                            <li class="nav-item">
                                <Link to="/room-booking" class=" btn px-3">book now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navigation;