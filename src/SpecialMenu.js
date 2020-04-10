import React from 'react';
import './sass/SpecialMenu.scss';

const SpecialMenu = (props) => {
    return (
        <div className="SpecialMenu" id="SpecialMenu">
            <div className="container">
                <h5 className="comp-title">SpecialMenu</h5>
                <h2 className="">Delicious Flavor of Autum</h2>
                <div className="row boxes">
                {props.globalState.map(info =>
                    <div className="col-md-4">
                        <div className="box">
                        <div className="box-img wow fadeInUp"  style={{background: `url("${info.img}") no-repeat center center`}}>
                            <div className="price-circle">$ {info.price}</div></div>
                            <span className="title">{info.title}</span>
                            <p className="details">
                            {info.description}
                            </p>
                        </div>
                    </div>
                )}
                </div>
                <a className="link" style={{textAlign: 'center'}}>View Full Menu</a>
            </div>
        </div>
        );
};

export default SpecialMenu;

