import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReviewListCard from './ReviewListCard.js';

const ReviewList = () => {
    const [reviewList, setReviewList] = useState([]);
    const currentLocation = useLocation();

    useEffect(() => {
        loadReviewList()
    }, [])

    const loadReviewList = () => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/client-reviews')
            .then(response => response.json())
            .then(data => {
                setReviewList(data)
            })
    }
    return (
        <section className='review-list'>
            {
                currentLocation.pathname === '/dashboard/reviews-list' &&
                <div className='header-section'>
                    <h3>review list</h3>
                    <strong>Total reviews: {reviewList.length}</strong>
                    <h5>dashboard/review-list</h5>
                </div>
            }

            <div className="row">
                {
                    reviewList.map(review => <ReviewListCard review={review} key={review._id} loadReviewList={loadReviewList} />)
                }
            </div>
        </section>
    );
};

export default ReviewList;