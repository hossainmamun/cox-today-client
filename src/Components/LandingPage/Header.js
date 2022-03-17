import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextApi } from '../../App.js';
import '../../Styles/TopHeader.scss'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(contextApi);

    return (
        <section id='header' className='top-header container'>
            <div className='left-side'>
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Sea Beach, Hotel Motel Zone, Cox's Bazar 4700</span>
                </div>
                <p>
                    <i class="fas fa-phone-volume"></i>
                    <span>+88 0123654789</span>
                </p>
            </div>
            <div className='btn-container'>
                {
                    loggedInUser.email ?
                        <div>
                            <span className='text-primary'>{loggedInUser.userName}</span>
                            <button onClick={() => setLoggedInUser({})} className='btn btn-outline-danger ms-4'>SignOut</button>
                        </div>
                        :
                        <div className='d-flex align-items-center'>
                            <i class="fas fa-user" style={{ fontSize: '18px' }}></i>
                            <div>
                                <Link to="/login_register" className='log-reg'>Login/</Link>
                                <Link to="/login_register" className='log-reg ms-0'>Register</Link>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default Header;