import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../Styles/LatestOffer.scss'
import LatestOfferDisplay from './LatestOfferDisplay.js';

const LatestOffer = () => {
    const [latest, setLatest] = useState([]);
    const currentLocation = useLocation();
    useEffect(() => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/special-offer')
            .then(response => response.json())
            .then(data => {
                currentLocation.pathname === '/home' || currentLocation.pathname === '/' ?
                    setLatest(data.slice(0, 2))
                    :
                    setLatest(data)
            })
    })
    return (
        <section className='latest-offer common-heading'>
            <div className="container mb-5">
                {
                    currentLocation.pathname === '/home' || currentLocation.pathname === '/' ?
                        <div className='heading'>
                            <h2>Latest <span>Offers</span></h2>
                            <h5>we always provide latest offer</h5>
                        </div>
                        :
                        <div className='heading'>
                            <h2>Latest <span>Offers</span></h2>
                        </div>
                }
            </div>

            <div className="container">
                {
                    latest.length === 0 &&
                    <div>
                        <h3>Loading...</h3>
                    </div>
                }
                <div className="row latest-offer">
                    {
                        latest.map(latest => <LatestOfferDisplay latest={latest} key={latest._id} />)
                    }
                </div>
            </div>

            <div className='container mt-5'>
                {
                    currentLocation.pathname === '/home' || currentLocation.pathname === '/' ?
                        <Link to="/all-rooms-list">
                            <button className='btn btn-outline-dark px-4 rounded-0 text-uppercase'>more offer</button>
                        </Link>
                        :
                        ''
                }
            </div>
        </section>
    );
};

export default LatestOffer;