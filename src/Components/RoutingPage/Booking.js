import React, { useState } from 'react';
import Navigation from '../Reuse/Navigation.js';
import '../../Styles/Booking.scss';
import Footer from '../Reuse/Footer.js';

const Booking = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState(null);
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [adult, setAdult] = useState(null);
    const [children, setChildren] = useState(null);
    const [bookingType, setBookingType] = useState('');

    const clientInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        category: category,
        type: type,
        arrival: arrival,
        departure: departure,
        adult: adult,
        children: children,
        bookingType: bookingType,
    }

    // ! post booking information to server
    const handleBookingInfo = (e) => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/booking-collection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Booking Info Create Successfully')
                    window.location.reload();
                    console.log(data)
                }
                else {
                    alert('Booking create failed')
                }
            })
            .catch(err => {
                console.log(err)
            })

        e.preventDefault();
    }

    return (
        <section className='booking'>
            <Navigation />
            <div className="booking-header">
                <div className='booking-hero'>
                    <div className="overlay">
                        <div>
                            <h2>Room-RESERVATION</h2>
                            <p>we provide quality services</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container reservation-form'>
                <div>
                    <h2>Reservation From</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-8">
                        {/*  form start  */}
                        <form onSubmit={handleBookingInfo} className='form'>
                            <div className="row my-4">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="firstName" id="" onChange={(e) => setFirstName(e.target.value)} className="form-control" placeholder='enter first name' required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" name="lastName" id="" onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder='enter last name' required />
                                    </div>
                                </div>
                            </div>
                            {/* ########################################## */}

                            <div className="row my-4">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} className="form-control text-lowercase" placeholder='enter email' required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="number" name="phone" id="" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder='enter phone +88' required />
                                    </div>
                                </div>
                            </div>
                            {/* ########################################## */}

                            <div className="row my-4">
                                <div className="col-lg-6">
                                    <select type="text" name="category" id="" onChange={(e) => setCategory(e.target.value)} className="form-control form-select" required>
                                        <option selected disabled hidden value="">Category</option>
                                        <option value="economy none-ac">economy none-ac</option>
                                        <option value="deluxe">deluxe</option>
                                        <option value="deluxe pro">deluxe pro</option>
                                        <option value="luxury">luxury</option>
                                        <option value="luxury pro">luxury pro</option>
                                        <option value="royal park">royal park</option>
                                        <option value="ocean view">ocean view</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <select type="text" name="type" id="" onChange={(e) => setType(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">Room Type</option>
                                            <option value="Double">Double</option>
                                            <option value="Single">Single</option>
                                            <option value="Family">Family</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* ##################### date input ##################### */}

                            <div className="row my-4">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="" className='text-capitalize'>arrival date</label>
                                        <input type="date" name="arrival" id="" onChange={(e) => setArrival(e.target.value)} className="form-control text-uppercase" placeholder='arrival date' required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="" className='text-capitalize'>departure date</label>
                                        <input type="date" name="departure" id="" onChange={(e) => setDeparture(e.target.value)} className="form-control text-uppercase" required />
                                    </div>
                                </div>
                            </div>
                            {/* ########################################## */}

                            <div className="row my-4">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <select type="number" name="adult" id="" onChange={(e) => setAdult(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">adult</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <select type="number" name="children" id="" onChange={(e) => setChildren(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">children</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <select type="number" name="bookingType" id="" onChange={(e) => setBookingType(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">Booking Type</option>
                                            <option value="General">General</option>
                                            <option value="Guest">Guest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* ########################################## */}

                            <input type="submit" className='btn btn-outline-dark rounded-0 px-4' value="Booking" />
                        </form>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </section>
    );
};

export default Booking;