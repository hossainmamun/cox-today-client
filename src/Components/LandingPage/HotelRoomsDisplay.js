import React from 'react';
import { Link } from 'react-router-dom';

const HotelRoomsDisplay = (props) => {
    const { bed, category, facility, rent, room, roomDetail, imgUrl, _id } = props.room
    return (
        <div className='col-md-4 my-4'>
            <div className="card border-0 shadow rounded-0">
                <img src={imgUrl} className="img-fluid" alt="" style={{height: '273px'}} />
                <div className="card-body">
                    <h4 className='text-capitalize'>{category} room</h4>
                    <h5>&#2547; {rent}.Tk</h5>
                    <Link to={`/single-room-detail/${_id}`} style={{ cursor: 'pointer', textDecoration: 'none', color: 'GrayText' }}>
                        <span className='text-capitalize'>
                            view detail
                            <i class="fas fa-arrow-right ms-3"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotelRoomsDisplay;