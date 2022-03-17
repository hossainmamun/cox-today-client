import React, { useState } from 'react';
import axios from 'axios';
import '../../Styles/CommonListing.scss'

const SpecialOffer = () => {
    const [offerPercent, setOfferPercent] = useState('');
    const [title, setTitle] = useState('');
    const [ticket, setTicket] = useState(false);
    const [restaurant, setRestaurant] = useState(false);
    const [concert, setConcert] = useState(false);
    const [pickUp, setPickUp] = useState(false);
    const [spa, setSpa] = useState(false);
    const [bodyMassage, setBodyMassage] = useState(false);
    const [note, setNote] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(null);

    // ! image upload
    const handleImgUpload = (e) => {
        const imgData = new FormData()
        imgData.set('key', process.env.REACT_APP_IMG_API)
        imgData.append('image', e.target.files[0])

        const options = {
            onUploadProgress: progressEvent => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total);
                if (percent < 100) {
                    setUploadPercentage(percent);
                }
            },
        };

        axios.post('https://api.imgbb.com/1/upload', imgData, options)
            .then((response) => {
                setImgUrl(response.data.data.display_url)
                setUploadPercentage(100)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const totalOfferInfo = {
        offerPercent: offerPercent,
        title: title,
        ticket: ticket,
        restaurant: restaurant,
        concert: concert,
        pickUp: pickUp,
        spa: spa,
        bodyMassage: bodyMassage,
        note: note,
        imgUrl: imgUrl,
    }
    console.log(totalOfferInfo);
    // ! handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://shrouded-fortress-44891.herokuapp.com/special-offer-room', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(totalOfferInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('data input successfully');
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <section className='offer-listing'>
            <div className='header-section'>
                <h3>Special Offer listing</h3>
                <h5>dashboard/special-room-listing</h5>
            </div>

            <div className='form ms-lg-5 ms-md-0 px-4'>
                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={handleFormSubmit}>
                            <legend>
                                <h3>SetUP An Offer</h3>
                            </legend>

                            <div className="form-group">
                                <label htmlFor="">Offer Percent</label>
                                <input type="text" name="offerPercent" onChange={(e) => setOfferPercent(e.target.value)} className='form-control' placeholder='Set Offer Percent' required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Offer Title</label>
                                <input type="text" name="title" id="" onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder='Offer Title' required />
                            </div>
                            {/* ######################################### */}
                            <div className="form-group">
                                <label htmlFor="" className='d-block mb-2'>Select Offer Type</label>
                                <div>
                                    <input type="checkbox" name="ticket" id="" onChange={(e) => setTicket(!ticket && e.target.value)} className='me-4' value='Flight-Ticket' />
                                    <label htmlFor="">Flight-Ticket</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="restaurant" id="" onChange={(e) => setRestaurant(!restaurant && e.target.value)} className='me-4' value='Restaurant (Full Board)' />
                                    <label htmlFor="">Restaurant (Full Board)</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="concert" id="" onChange={(e) => setConcert(!concert && e.target.value)} className='me-4' value='Music Concert' />
                                    <label htmlFor="">Music Concert</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="pickUp" id="" onChange={(e) => setPickUp(!pickUp && e.target.value)} className='me-4' value='Airport Pick-up' />
                                    <label htmlFor="">Airport Pick-up</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="spa" id="" onChange={(e) => setSpa(!spa && e.target.value)} className='me-4' value='Get Free Spa' />
                                    <label htmlFor="">Get Free Spa</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="bodyMassage" id="" onChange={(e) => setBodyMassage(!bodyMassage && e.target.value)} className='me-4' value='Get Full Body Massage' />
                                    <label htmlFor="">Get Full Body Massage</label>
                                </div>
                            </div>
                            {/* ###################################### */}
                            <div className="form-group">
                                <label htmlFor="">Upload Image</label>
                                <input type="file" name="image" id="" onChange={handleImgUpload} className="form-control" />
                            </div>
                            {
                                uploadPercentage &&
                                <div className="form-group" >
                                    {
                                        uploadPercentage === 100 ?
                                            <label htmlFor="">Upload Successful</label>
                                            :
                                            <label htmlFor="">Image Uploading...</label>
                                    }

                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${uploadPercentage}%` }}>{`${uploadPercentage}%`}</div>
                                    </div>
                                </div>
                            }

                            <div className="form-group">
                                <label htmlFor="">Offer Note</label>
                                <textarea name="note" id="" rows="4" onChange={(e) => setNote(e.target.value)} className='form-control text-lowercase' placeholder='Details' required></textarea>
                            </div>

                            <input type="submit" value="Upload Room" className='btn btn-outline-dark rounded-0 mt-4' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;