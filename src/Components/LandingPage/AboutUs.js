import React from 'react';
import '../../Styles/About.scss';
import about_img from '../../images/about-us-2.jpg';

const AboutUs = () => {
    return (
        <section id='about' className='about-us'>
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    <div className="col-md-5">
                        <img src={about_img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>why <span>choose us</span></h2>
                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae totam quis aperiam, inventore enim nesciunt incidunt autem quod tempora voluptatem alias distinctio perferendis possimus!</p>

                        <ul className='unorder-list'>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                                <span>Pork bresaola meatloaf tongue, landjaeger tail andouille.</span>
                            </li>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                                <span>Incididunt ut labore et dolore magna aliqua.</span>
                            </li>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                                <span>Ut enim ad minim veniam, quis nostrud.</span>
                            </li>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                                <span>Kevin pastrami tri-tip prosciutto ham hock pork belly.</span>
                            </li>
                            <li>
                                <i class="fas fa-chevron-right"></i>
                                <span>landjaeger tail andouille strip steak tenderloin sausage.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;