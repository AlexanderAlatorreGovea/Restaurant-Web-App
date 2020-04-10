import React from 'react';
import WOW from "wowjs";

import './sass/OurStory.scss';


class OurStory extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
    return (
        <div className="OurStory" id="OurStory">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="comp-title">OurStory</h5>
                        <h2>Cooking is the art of adjusment</h2>
                        <p className="wow slideInLeft">
                            Lorem ipsum dolor amet truffaut lo-fi cold-pressed, shoreditch la croix snackwave aesthetic. Godard single-origin coffee locavore, mumblecore pabst photo booth deep v 3 wolf moon meh bitters biodiesel tote bag venmo succulents affogato. Letterpress vice austin cliche adaptogen pickled migas chambray schlitz fixie.
                        </p>
                        <div className="quote"><i>"The best steak in the town of Hungtinton"</i>-<stron>Thomas Eggsy</stron></div>
                        <a className="res-btn">Reserve</a>
                    </div>
                    <div className="col-md-6 left-img wow slideInRight" >
                        <img  
                            src='https://images.pexels.com/photos/2237189/pexels-photo-2237189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            className="secondary-img" style={{maxWidth: '400px', height: '500px'}}
                        />
                    </div>
                </div>
            </div>
        </div>
        );
    }
};

export default OurStory;