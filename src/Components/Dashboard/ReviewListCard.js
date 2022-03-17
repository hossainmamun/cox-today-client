import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        border: "0px",
        borderRadius: "8px",
        padding: "40px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
};

const ReviewListCard = ({ review, loadReviewList }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editReview, setEditReview] = useState({});

    // ! LOAD SINGLE API FROM SERVER
    const openModal = (id) => {
        fetch(`https://shrouded-fortress-44891.herokuapp.com/client-reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setEditReview(data)

            })
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    // ! REVIEW EDIT FUNCTION
    const ReviewEdit = (e) => {
        const newEditForm = { ...editReview }
        newEditForm[e.target.name] = e.target.value;
        setEditReview(newEditForm)
        e.preventDefault();
    }

    // ! REVIEW UPDATE API
    const ReviewUpdate = (id) => {
        fetch(`https://shrouded-fortress-44891.herokuapp.com/client-reviews/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert('Update review Successfully');
                    window.location.reload();
                }
                loadReviewList();
            })
            .catch(err => {
                console.log(err)
            })
    }

    // ! DELETE REVIEW
    const deleteReview = (id) => {
        fetch(`https://shrouded-fortress-44891.herokuapp.com/client-reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.confirm('Went To Delete This User')
                    window.alert('Delete User Successfully')
                }
                loadReviewList();
            })
    }

    return (
        <section>
            <div className='col-12'>
                <div className="card mb-3">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-3 text-center text-capitalize">
                            <img src={review.imgUrl} className="img-fluid" alt="" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                            <h5 className='my-2'>{review.name}</h5>
                            <h6>{review.profession}</h6>
                        </div>
                        <div className="col-md-7 d-flex align-items-center">
                            <div className="card-body">
                                <p className='mb-0'>{review.comments}</p>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="row justify-content-center">
                                <div className="col-2">
                                    <i class="fas fa-edit" onClick={() => openModal(review._id)} style={{ fontSize: '22px', cursor: 'pointer', color: 'blue' }}></i>
                                </div>
                                <div className="col-2">
                                    <i class="fas fa-trash-alt" onClick={() => deleteReview(review._id)} style={{ fontSize: '22px', cursor: 'pointer', color: 'red' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h4>Edit Review</h4>
                    <button className='btn btn-primary rounded-0 px-4' onClick={closeModal}>close</button>
                </div>

                <div className="row my-2 justify-content-center">
                    <div className="col-md-12">
                        <div className="form-group my-2">
                            <input type="text" name="name" id="" value={editReview.name} onChange={ReviewEdit} className="form-control" placeholder='Enter Name' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group my-2">
                            <input type="text" name="profession" id="" value={editReview.profession} onChange={ReviewEdit} className="form-control" placeholder='Enter profession' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group my-2">
                            <textarea name="comments" id="" rows="10" value={editReview.comments} onChange={ReviewEdit} className='form-control' placeholder='Comments'></textarea>
                        </div>
                    </div>
                </div>

                <button onClick={() => ReviewUpdate(editReview._id)} className='btn btn-success border-0 px-4 rounded-0'>Update</button>
            </Modal>

        </section>
    );
};

export default ReviewListCard;