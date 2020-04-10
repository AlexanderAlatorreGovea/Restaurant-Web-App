import React from 'react';
import './sass/ContactUs.scss';

const ContactUs = () => {
    return (
        <div className="ContactUs" id="ContactUs" >
            <div className="container">
               <h5 className="comp-title wow fadeInUp">Contact Us</h5>
               <h2 className="wow fadeInUp">Delicious Flavors of Autum</h2>
               <div className="box">
                   <div className="row">

                        <div className="col-md-6 contact">
                            <div className="city">
                                Los Angeles, California
                            </div>
                            <h6 className="address">
                                435 Main st, <br />
                                Hollywood, CA 12402
                            </h6>
                            <p>
                                <strong>email:</strong> <a href="mailto:Info@primesteak.com">Info@primesteak.com</a> 
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h6>
                            Phone:                                
                            </h6>
                            <div className="title">
                            223-333-2222
                            </div>
                            <h6>
                            Lunch Service:                                
                            </h6>
                            <p>
                                Friday, Saturday, Suday <br/>
                                from 12PM - 1:30PM
                            </p>
                            <h6>
                                Dinner Service:                                
                            </h6>
                            <p>
                                Daily <br/>
                                from 6PM - 9:30PM
                            </p>
                        </div>

                   </div>
               </div>
            </div>
        </div>
    );
};

export default ContactUs;