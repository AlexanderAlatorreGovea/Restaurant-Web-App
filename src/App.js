import React, { Component } from 'react';
import Header from './Header';
import TopImage from './TopImage';
import OurStory from './OurStory';
import SpecialMenu from './SpecialMenu';
import RandomQuote from './RandomQuote';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import Footer from './Footer'
import globalState from './staticData/globalState';
import './sass/main.scss';
import './sass/_reset.scss';
import './sass/_variables.scss';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalState,
      count: 0,
      review: [
        {
          author: 'Joe Doe',
          company: 'The Food Network',
          highlight: 'Best Restaurant in the L.A. Area',
          authorInfo: 'Winner Of The Cheff Masters',
          review: 'Lorem ipsum dolor amet truffaut lo-fi cold-pressed, shoreditch la croix snackwave aesthetic. Godard single-origin coffee locavore, mumblecore pabst photo booth deep v 3 wolf moon meh bitters biodiesel tote bag venmo succulents affogato.'
        },
        {
          author: 'Jhnny Doe',
          company: 'HBO',
          authorInfo: 'Owner of the Greates Restaurant',
          review: 'Polaroid adaptogen enamel pin iceland dreamcatcher subway tile mixtape, pop-up trust fund pok pok street art fanny pack flannel pinterest. Banjo fixie 8-bit XOXO 3 wolf moon bitters af +1 migas craft beer. Lo-fi pour-over chicharrones, raw denim raclette blog stumptown readymade.'
        },
        {
          author: 'Harold Doe',
          company: 'Times',
          authorInfo: 'Winner Of Master Cheff',
          review: 'Gentrify fam try-hard, thundercats tacos portland schlitz offal listicle PBR&B twee kombucha bitters. Cloud bread sustainable slow-carb brooklyn woke chartreuse. La croix blue bottle glossier sustainable. 3 wolf moon heirloom schlitz street art messenger bag.'
        }
    ]
    };
  }
  
  render() {
    return (
      <div>
        <Header  />
        <TopImage />
        <OurStory />
        <SpecialMenu globalState={globalState} />
        <RandomQuote />
        <Reviews RandomQuote={this.state}/>
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
