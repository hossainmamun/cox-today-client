import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Hero.scss'

const Hero = () => {
    return (
        <section id='hero' className='hero'>
            <div className="inner-content">
                <div className='container'>
                    <span>welcome to</span>
                    <h1>hotel coxtoday</h1>
                    <strong>best luxury's hotel in the world</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda minima <br /> fugit a voluptatum nemo illo? Temporibus labore eius ut placeat assumenda et <br /> soluta molestiae aliquid?</p>
                    <Link to="/room-booking">
                        <button className='btn default-btn'>book now</button>
                    </Link>
                </div>
            </div>
            <div className='img-box'>
                <img src="https://i.ibb.co/jT1rkXb/luxury.jpg" className='img-fluid' alt="" />
            </div>
        </section>
    );
};

export default Hero;