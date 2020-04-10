import React from 'react';
import './sass/Reviews.scss';

class Reviews extends React.Component {

    render() {
    return (
        <div className="Reviews" id="Reviews">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ">
                        <img className="wow slideInLeft" src='https://s-i.huffpost.com/gen/1282658/images/o-FEMALE-CHEF-facebook.jpg'/>
                    </div>
                    <div className="col-md-4 wow slideInRight">
                        <h5 className="comp-title">Reviews</h5>
                        <h2>The Food Network</h2>
                        <h4>
                        "Best Restaurant in the L.A. Area"
                        </h4>
                        <p>
                        Lorem ipsum dolor amet truffaut lo-fi cold-pressed, shoreditch la croix snackwave aesthetic. Godard single-origin coffee locavore, mumblecore pabst photo booth deep v 3 wolf moon meh bitters biodiesel tote bag venmo succulents affogato. 
                        </p>
                        <div className="author"><strong>Joe Doe</strong> <span></span> - <em>winner of the cheff masters</em> </div>
                        <div className="arrows">
                            <i class="arrow left icon"></i>
                            <i class="arrow right icon ready"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};

export default Reviews;
