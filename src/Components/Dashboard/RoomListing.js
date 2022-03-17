import React, { useState } from 'react';
import '../../Styles/CommonListing.scss';
import axios from 'axios';

const RoomListing = () => {
    const [category, setCategory] = useState('');
    const [rent, setRent] = useState(0);
    const [bed, setBed] = useState('');
    const [facility, setFacility] = useState('');
    const [room, setRoom] = useState('');
    const [roomDetail, setRoomDetail] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(null);

    const roomListingInfo = {
        category: category,
        rent: rent,
        bed: bed,
        facility: facility,
        room: room,
        roomDetail: roomDetail,
        imgUrl: imgUrl,
    }

    // ! img upload to imgbb
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


    // ! form submit to send data into server
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://shrouded-fortress-44891.herokuapp.com/hotel-room-collection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(roomListingInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('data upload successfully');
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <section className='room-listing'>
            <div className='header-section'>
                <h3>Hotel room listing</h3>
                <h5>dashboard/room-listing</h5>
            </div>

            <div className='form ms-lg-5 ms-md-0 px-4'>
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={handleFormSubmit}>
                            <legend>
                                <h3>Add Detail</h3>
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Set Category</label>
                                        <select type="text" name="category" id="" onChange={(e) => setCategory(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">Category</option>
                                            <option value="Double">economy none-ac</option>
                                            <option value="deluxe">deluxe</option>
                                            <option value="deluxe pro">deluxe pro</option>
                                            <option value="luxury">luxury</option>
                                            <option value="luxury pro">luxury pro</option>
                                            <option value="royal park">royal park</option>
                                            <option value="ocean view">ocean view</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Set Rent</label>
                                        <input type="number" name="rent" id="" onChange={(e) => setRent(e.target.value)} className="form-control" placeholder='Rent' required />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Set A Bed Type</label>
                                        <select type="text" name="bedType" id="" onChange={(e) => setBed(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">Bed Type</option>
                                            <option value="Double">Double</option>
                                            <option value="Single">Single</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Set Facility</label>
                                        <select type="text" name="facility" id="" onChange={(e) => setFacility(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">Facility</option>
                                            <option value="free wifi, alert phone, wide led tv, coffee maker">free wifi, alert phone, wide led tv, coffee maker</option>
                                            <option value="free wifi, alert phone, wide led tv">free wifi, alert phone, wide led tv</option>
                                            <option value="free wifi, alert phone, wide led tv, sports activity, free breakfast">free wifi, alert phone, wide led tv, sports activity, free breakfast</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Upload Image</label>
                                        <input type="file" name="image" id="" onChange={handleImgUpload} className="form-control" />
                                    </div>
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Set Room Type</label>
                                        <select type="text" name="roomType" id="" onChange={(e) => setRoom(e.target.value)} className="form-control form-select" required>
                                            <option selected disabled hidden value="">Room Type</option>
                                            <option value="Ac">Ac</option>
                                            <option value="None-Ac">None Ac</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Room Detail</label>
                                <textarea name="detail" id="" rows="10" onChange={(e) => setRoomDetail(e.target.value)} className='form-control text-lowercase' placeholder='Message' required></textarea>
                            </div>

                            <input type="submit" value="Upload Room" className='btn btn-outline-dark rounded-0 mt-4' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomListing;