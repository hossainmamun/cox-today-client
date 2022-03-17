import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/SingleRoomDetail.scss';

const SingleRoomDisplay = ({ singleRoom }) => {
    const date = new Date()
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <div className="row single-room-detail">
            <div className="col-md-3">
                <div className='contact-section'>
                    <h3>Contact Support</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.</p>
                    <div className='flex-section'>
                        <i class="fas fa-phone-volume"></i>
                        <div>
                            <span>+88 01628542145</span>
                            <span>+88 01774125365</span>
                        </div>
                    </div>
                    <div className='flex-section'>
                        <i class="fas fa-envelope"></i>
                        <div>
                            <span>info@coxtoday.com</span>
                            <span>message@coxtoday.com</span>
                        </div>
                    </div>
                </div>

                <div className='offer text-center mt-4'>
                    <div className='circle'>
                        <div>
                            <span>{month}</span>
                            <h4>special offer</h4>
                            <span>get 26% off</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, culpa.</p>
                    <button className='btn btn-block btn-dark rounded-0 px-4'>Book Now</button>
                </div>
            </div>
            <div className="col-md-7">
                <div className="card rounded-0 border-0">
                    <img src={singleRoom.imgUrl} className="img-fluid" alt="" />
                    <div className="card-body text-capitalize bg-light p-5">
                        <h3>${singleRoom.rent} / per night</h3>
                        <h4 className='text-uppercase fw-bolder'><span className='fw-bold text-warning'>category</span> : {singleRoom.category}</h4>
                        <h5><span className='fw-bold text-warning'>facility</span> : {singleRoom.facility}</h5>
                        <h5><span className='fw-bold text-warning'>bed type</span>: {singleRoom.bed}</h5>
                        <h5><span className='fw-bold text-warning'>room</span> : {singleRoom.room}</h5>
                        <p>{singleRoom.roomDetail}</p>
                        <Link to="/room-booking">
                            <button className='btn btn-block btn-outline-dark rounded-0 px-4'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRoomDisplay;