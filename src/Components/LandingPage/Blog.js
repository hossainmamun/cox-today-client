import React, { useEffect, useState } from 'react';
import '../../Styles/Pricing.scss';
import Slider from "react-slick";
import BlogDisplay from './BlogDisplay.js';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/latest-blogs')
            .then(response => response.json())
            .then(data => {
                setBlogs(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id='blogs' className='pricing common-heading'>
            <div className="container">
                <div className='heading'>
                    <h2>Latest <span>Blogs</span></h2>
                    <h5>checkout our latest blogs</h5>
                </div>
            </div>

            <div className="container">
                {
                    blogs.length === 0 &&
                    <div>
                        <h3>Loading...</h3>
                    </div>
                }
                <div className="row">
                    <Slider {...settings}>
                        {
                            blogs.map(blog => <BlogDisplay blog={blog} key={blog._id} />)
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Blog;