import axios from 'axios';
import React, { useState } from 'react';
import '../../Styles/CommonListing.scss'

const ImgUpload = () => {
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(null);

    const imgUploadInfo = {
        title: title,
        imgUrl: imgUrl,
    }

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
                console.log(response.data.data.display_url)
                setUploadPercentage(100)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://shrouded-fortress-44891.herokuapp.com/upload-img-gallery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(imgUploadInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Img Uploaded successfully');
                    document.getElementById('title').value = '';
                    document.getElementById('image').value = '';
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <section className='upload-img'>
            <div className='header-section'>
                <h3>Blog Listing</h3>
                <h5>dashboard/upload-img-gallery</h5>
            </div>

            <div className='form ms-lg-5 ms-md-0 px-4'>
                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={handleFormSubmit}>
                            <legend>
                                <h3>Upload Image To Gallery</h3>
                            </legend>

                            <div className="form-group">
                                <label htmlFor="">Image Title</label>
                                <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} className='form-control' placeholder='Image Title' required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Upload Image</label>
                                <input type="file" name="image" id="image" onChange={handleImgUpload} className="form-control" />
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

                            <input type="submit" value="Upload Image" className='btn btn-outline-dark rounded-0 mt-4' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImgUpload;