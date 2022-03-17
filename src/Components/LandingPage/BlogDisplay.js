import React from 'react';

const BlogDisplay = ({ blog }) => {
    return (
        <div className="col mx-3 my-4" style={{
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
        }}>
            <div className="card border-0">
                <img src={blog.imgUrl} className='img-fluid' alt="" style={{ height: '260px' }} />
                <div className="card-body">
                    <h4 className='text-capitalize'>{blog.title}</h4>
                    <h6 className='text-capitalize mb-3'>{new Date(blog.date).toDateString('dd/mm/yyyy')}</h6>
                    <p className='mb-0'>" {blog.description.slice(0, 200)}... "</p>
                    <span className='d-block mt-4 text-warning' style={{ cursor: 'pointer' }}>
                        Learn More
                        <i class="fa fa-arrow-right d-inline-block ms-3"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogDisplay;