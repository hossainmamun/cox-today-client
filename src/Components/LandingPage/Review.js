import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Review.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewDisplay from './ReviewDisplay.js';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/client-reviews')
            .then(response => response.json())
            .then(data => {
                setReview(data)
            })
    }, [])


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        initialSlide: 0,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='reviews common-heading bg-light py-5'>
            <div className="container">
                <div className='heading'>
                    <h2>What <span>Clients Say</span></h2>
                    <h5>best experience to our clients</h5>
                </div>

                {
                    review.length === 0 &&
                    <div>
                        <h3>Loading...</h3>
                    </div>
                }

                <div className='row'>
                    <Slider {...settings}>
                        {
                            review.map(reviews => <ReviewDisplay reviews={reviews} key={review._id} />)
                        }
                    </Slider>
                </div>

                <div className='pt-5'>
                    <Link to="/review/add-client-review">
                        <button className='btn btn-outline-dark px-4 rounded-0 mt-5'>ADD REVIEW</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Review;