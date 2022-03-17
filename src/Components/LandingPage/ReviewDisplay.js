import React from 'react';

const imgStyle = {
    height: '100px',
    width: '100px',
    margin: '20px auto',
    borderRadius: '50%',
}

const ReviewDisplay = ({ reviews }) => {
    return (
        <div className="col mx-3 my-4">
            <div className="card text-center border-0 bg-light" style={{
                boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
            }}>
                <img src={reviews.imgUrl} className='img-fluid' alt="" style={imgStyle} />
                <div className="card-body">
                    <h4 className='text-capitalize'>{reviews.name}</h4>
                    <h6 className='text-capitalize mb-3'>{reviews.profession}</h6>
                    <p className='mb-0 px-5 mx-5'>" {reviews.comments} "</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDisplay;