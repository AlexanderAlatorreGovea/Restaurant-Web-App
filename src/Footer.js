import React from 'react';
import './sass/Footer.scss';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="container">
                <nav className="menu">
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="OurStory"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>Our Story</Link></a>
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="Reviews"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Reviews</Link></a>
                      <a className="header-tag"><Link
                        activeClass="active"
                        to="SpecialMenu"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Special Menu</Link></a>
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="ContactUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Contact Us</Link></a>
                </nav>
                <ul className="social-media">
                    <li><a><i class="facebook icon"></i></a></li>
                    <li><a><i class="twitter icon"></i></a></li>
                    <li><a><i class="google plus icon"></i></a></li>
                    <li><a><i class="youtube icon"></i></a></li>
                </ul>
                <div className="copyright">
                © 2019 Copyright
                </div>
            </div>
        </footer>
    );
};

export default Footer;

                
