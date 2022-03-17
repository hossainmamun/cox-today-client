import React from 'react';
import '../../Styles/Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <h2>cox<span>today</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut reiciendis placeat repellendus molestiae amet laudantium repellat magnam nemo adipisci. Quidem aperiam rem enim, cum temporibus assumenda fugiat? Dignissimos, repellendus consequuntur!</p>
                <div className='icon-container'>
                    <a href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-google-plus-g"></i>
                    </a>
                </div>
                <div className='copy-right'>
                    <p>copy&copy;right {new Date().getFullYear()} all right reserved || <span>mamun hossain</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;