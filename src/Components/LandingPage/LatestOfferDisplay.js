import React from 'react';

const LatestOfferDisplay = (props) => {
    const { imgUrl, offerPercent, title, ticket, restaurant, concert, pickUp, spa, bodyMassage, note } = props.latest
    return (
        <div className="col-md-6 mb-4">
            <div className="card rounded-0">
                <img src={imgUrl} className="img-fluid" alt="" />
                <div className="card-body">
                    <h6>enjoy with {offerPercent} off</h6>
                    <h3 className='text-capitalize'>{title}</h3>
                    <p>{note}</p>
                    <div className='mt-3'>
                        <ul>
                            {
                                ticket &&
                                <li>- {ticket}</li>
                            }
                            {
                                restaurant &&
                                <li>- {restaurant}</li>
                            }
                            {
                                concert &&
                                <li>- {concert}</li>
                            }
                            {
                                pickUp &&
                                <li>- {pickUp}</li>
                            }
                            {
                                spa &&
                                <li>- {spa}</li>
                            }
                            {
                                bodyMassage &&
                                <li>- {bodyMassage}</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestOfferDisplay;