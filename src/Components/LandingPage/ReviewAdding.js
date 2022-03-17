import React, { useState } from 'react';
import Navigation from '../Reuse/Navigation.js';
import axios from 'axios';

const ReviewAdding = () => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [comments, setComments] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(null);

    const reviewInfo = {
        name: name,
        profession: profession,
        comments: comments,
        imgUrl: imgUrl,
    }
    console.log(reviewInfo)

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
                console.log(response.data.data.display_url)
                setUploadPercentage(100)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // ! send client review to server
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://shrouded-fortress-44891.herokuapp.com/clients-review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('thanks for your valuable review')
                    window.location.reload();
                }
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <section>
            <Navigation />

            <div className="container mt-5">
                <div className='text-capitalize my-4 text-center'>
                    <h2>Add Some Reviews</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam?</p>
                </div>
                <div className='row justify-content-center'>
                    <div className="col-md-6">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group mt-4">
                                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} className="form-control py-3 rounded-0" placeholder='Enter Name' />
                            </div>
                            <div className="form-group mt-4">
                                <input type="text" name="profession" id="profession" onChange={(e) => setProfession(e.target.value)} className="form-control py-3 rounded-0" placeholder='Enter profession' />
                            </div>
                            <div className="form-group mt-4">
                                <input type="file" name="image" id="image" onChange={handleImgUpload} className="form-control py-3 rounded-0" />
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
                            <div className="form-group mt-4">
                                <textarea name="comments" id="comments" rows="10" onChange={(e) => setComments(e.target.value)} className='form-control py-3 rounded-0' placeholder='Add Your Review'></textarea>
                            </div>

                            <input type="submit" value="SUBMIT" className='btn btn-outline-dark rounded-0 mt-4 px-4' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewAdding;