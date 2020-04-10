import React from 'react';
import './sass/TopImage.scss';

const TopImage = () => {
    return (
        <div className="TopImg" id="TopImg">
                <div className="title">
                <h5 className="animated fadeInUp">Welcome</h5>
                    <h1 className="main-title animated fadeInUp">Prime Steak</h1>
                </div>
                    <div className="contact-info">
                        <div>Book Table Directly</div>
                        <h2> (805) - 208 - 2929</h2>
                        <div className="hours">
                        Opening Hours <strong> Mon - Fri: </strong> 9am - 9pm
                        &nbsp; <strong> Weekend: </strong> 9am - 11pm
                        </div>
                    </div>
        </div>
    );
};

export default TopImage;

