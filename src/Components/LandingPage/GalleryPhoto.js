import React, { useEffect, useState } from 'react';
import '../../Styles/Gallery.scss';
import GalleryDisplay from './GalleryDisplay.js';
import Slider from "react-slick";

const GalleryPhoto = () => {
    const [Image, setImage] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-fortress-44891.herokuapp.com/gallery')
            .then(response => response.json())
            .then(data => {
                setImage(data)
            })
    }, [])

    const settings = {
        className: "center",
        dots: true,
        autoplay: false,
        centerMode: true,
        infinite: true,
        centerPadding: "5px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
        ],
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "20px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "#000",
                    border: "1px solid #000"
                }}
            >
                {i + 1}
            </div>
        )
    };

    return (
        <section id='gallery' className='gallery common-heading'>
            <div className="container">
                <div className='heading'>
                    <h2>Gallery</h2>
                    <h5>enjoy best gallery show</h5>
                </div>
            </div>

            <div className="row g-0 mt-5">
                {
                    Image.length === 0 &&
                    <div>
                        <h3>Loading...</h3>
                    </div>
                }
                <Slider {...settings}>
                    {
                        Image.map(img => <GalleryDisplay img={img} key={img._id} />)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default GalleryPhoto;