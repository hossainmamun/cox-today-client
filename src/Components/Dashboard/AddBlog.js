import axios from 'axios';
import React, { useState } from 'react';
import '../../Styles/CommonListing.scss'

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(null);

    const blogInfo = {
        title: title,
        date: date,
        description: description,
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
                setUploadPercentage(100)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // ! form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('https://shrouded-fortress-44891.herokuapp.com/latest-blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Blog Insert successfully');
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <section className='blog-listing'>
            <div className='header-section'>
                <h3>Blog Listing</h3>
                <h5>dashboard/add-latest-blog</h5>
            </div>

            <div className='form ms-lg-5 ms-md-0 px-4'>
                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={handleFormSubmit}>
                            <legend>
                                <h3>SetUP An Offer</h3>
                            </legend>

                            <div className="form-group">
                                <label htmlFor="">Topic Name</label>
                                <input type="text" name="title" id="" onChange={(e) => setTitle(e.target.value)} className='form-control' placeholder='Topic Name' required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Pick Date</label>
                                <input type="date" name="date" id="" onChange={(e) => setDate(e.target.value)} className="form-control text-uppercase" placeholder='Offer Title' required />
                            </div>

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
                                <label htmlFor="">Write Blog</label>
                                <textarea name="description" id="" rows="12" onChange={(e) => setDescription(e.target.value)} className='form-control text-lowercase' placeholder='Write Blogs...' required></textarea>
                            </div>

                            <input type="submit" value="Upload Blog" className='btn btn-outline-dark rounded-0 mt-4' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBlog;