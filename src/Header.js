import React from 'react';
import './sass/Header.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from './staticData/logo_transparent.png';

const Header = (props) => {
    return ( 
        <div className="Header">
                <img src={Logo} className="logo"/>
                <span class="icon icon-bike"></span>
                <nav className="fadeIn">  
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="OurStory"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>Our Story</Link></a>
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
                        to="Reviews"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Reviews</Link></a>
                    <a className="header-tag"><Link
                        activeClass="active"
                        to="ContactUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Contact Us</Link></a>
                </nav>   
        </div>
    );
};

export default Header;

