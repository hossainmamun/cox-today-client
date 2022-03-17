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
Modal.setAppElement('#root');

const BookingListTable = ({ bookingList, loadBookingList }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editInfo, setEditInfo] = useState({})

    // ! delete booking info
    const handleBookingDelete = (bookingId) => {
        fetch(`https://shrouded-fortress-44891.herokuapp.com/delete-booking-info/${bookingId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    window.confirm('Went To Delete This User')
                    window.alert('Delete User Successfully')

                }
                loadBookingList()
            })
    }
    // ! load single booking to edit
    function openModal(id) {
        fetch(`https://shrouded-fortress-44891.herokuapp.com/edit-booking-list/${id}`)
            .then(response => response.json())
            .then(data => {
                setEditInfo(data)
            })
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    // ! editBookingInfo function to edit bookingList
    const editBookingInfo = (e) => {
        const newBookingInfo = { ...editInfo }
        newBookingInfo[e.target.name] = e.target.value;
        setEditInfo(newBookingInfo);
        e.preventDefault();
    }
    // ! update booking info
    const updateBookingInfo = (id) => {
        fetch(`https://shrouded-fortress-44891.herokuapp.com/edit-booking-list/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    window.alert('Update Booking Successfully');
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr className='text-capitalize fw-bold'>
                            <td className='px-1'>no</td>
                            <td>full name</td>
                            <td>email</td>
                            <td>phone</td>
                            <td>category</td>
                            <td>type</td>
                            <td>arrival</td>
                            <td>departure</td>
                            <td>adult</td>
                            <td>children</td>
                            <td>booking type</td>
                            <td>action</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookingList.map((booking, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{`${booking.firstName} ${booking.lastName}`}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.category}</td>
                                    <td>{booking.type}</td>
                                    <td>{booking.arrival}</td>
                                    <td>{booking.departure}</td>
                                    <td>{booking.adult}</td>
                                    <td>{booking.children}</td>
                                    <td>{booking.bookingType}</td>
                                    <td>
                                        <table className='table table-borderless mb-0'>
                                            <tbody>
                                                <tr className='text-center'>
                                                    <td className='p-0'>
                                                        <i class="fas fa-edit" onClick={() => openModal(booking._id)} style={{ fontSize: '22px', cursor: 'pointer', color: 'blue' }}></i>
                                                    </td>
                                                    <td className='p-0'>
                                                        <i class="fas fa-trash-alt" onClick={() => handleBookingDelete(booking._id)} style={{ fontSize: '22px', cursor: 'pointer', color: 'red' }}></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h4>Edit Booking Info</h4>
                        <button className='btn btn-danger px-3' onClick={closeModal}>close</button>
                    </div>

                    {/* ##################################### */}
                    <div className="row my-2">
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <input type="text" name="firstName" id="" value={editInfo.firstName || ''} onChange={editBookingInfo} className="form-control" placeholder='enter first name' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <input type="text" name="lastName" id="" value={editInfo.lastName || ''} onChange={editBookingInfo} className="form-control" placeholder='enter last name' />
                            </div>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" name="email" id="" value={editInfo.email || ''} onChange={editBookingInfo} className="form-control text-lowercase" placeholder='enter email' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="number" name="phone" id="" value={editInfo.phone || ''} onChange={editBookingInfo} className="form-control" placeholder='enter phone +88' />
                            </div>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <input type="text" name='category' value={editInfo.category || ''} onChange={editBookingInfo} className='form-control' placeholder='Enter Category' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <input type="text" name='type' value={editInfo.type || ''} onChange={editBookingInfo} className='form-control' placeholder='Enter Room Type' />
                            </div>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="arrival" id="" value={editInfo.arrival || ''} onChange={editBookingInfo} className="form-control text-uppercase" placeholder='arrival date' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="departure" id="" value={editInfo.departure || ''} onChange={editBookingInfo} className="form-control text-uppercase" placeholder='departure date' />
                            </div>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="number" name="adult" id="" value={editInfo.adult || ''} onChange={editBookingInfo} className="form-control" placeholder='adult' />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="number" name="children" id="" value={editInfo.children || ''} onChange={editBookingInfo} className="form-control"
                                    placeholder='Enter Children' />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" name="bookingType" id="" value={editInfo.bookingType || ''} onChange={editBookingInfo} className="form-control" placeholder='Enter Booking Type' />
                            </div>
                        </div>
                    </div>

                    <button onClick={() => updateBookingInfo(editInfo._id)} className='btn btn-success px-4'>Update</button>
                </Modal>
            </div>
        </section>
    );
};

export default BookingListTable;