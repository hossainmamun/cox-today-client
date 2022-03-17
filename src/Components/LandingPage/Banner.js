import React from 'react';
import '../../Styles/Banner.scss'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <div className='row text-center'>
                    <div className="col-md-4">
                        <div className="card">
                            <div className='icon'>
                                <i class="fas fa-utensils"></i>
                            </div>
                            <h3>best service</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus laboriosam corrupti culpa consequatur sapiente, quibusdam eius doloribus? Repudiandae, incidunt?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className='icon'>
                                <i class="fas fa-thumbs-up"></i>
                            </div>
                            <h3>Quality Food</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus laboriosam corrupti culpa consequatur sapiente, quibusdam eius doloribus? Repudiandae, incidunt?</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className='icon'>
                                <i class="fab fa-gripfire"></i>
                            </div>
                            <h3>Perfect Cooked</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti necessitatibus laboriosam corrupti culpa consequatur sapiente, quibusdam eius doloribus? Repudiandae, incidunt?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;