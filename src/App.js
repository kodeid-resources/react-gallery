import React from 'react';

import configStyles from './config-styles.js';
import Carousel from './Carousel.js';
import Frame from './Frame.js';
import Nav from './Nav.js';
import Slide from './Slide.js';

export default class GalleryApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.state = {
      showIndex: 0,
      numSlides: 5
    };
  }

  handleClickPrevious() {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    });
  }

  handleClickNext() {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    });
  }

  renderNav() {
    return (
      <Nav
        onPrevious={this.handleClickPrevious}
        hasPrevious={this.state.showIndex > 0}
        onNext={this.handleClickNext}
        hasNext={this.state.showIndex < this.state.numSlides - 1}
      />
    );
  }

  render() {
    return (
      <Frame>
        <Carousel
          showIndex={this.state.showIndex}
          nav={this.renderNav()}
          width={configStyles.imageWidth}
        >
          <Slide image={require('./images/1.jpg')} title="Star Wars Legos">
            Everything in Judah&lsquo;s imaginary world revolves around Star
            Wars: The Clone Wars these days. Between Wii Lightsaber Duels to the
            Star Wars Lego set that took he and Micheal three hours to assemble.
          </Slide>
          <Slide
            image={require('./images/2.jpg')}
            title="Star Wars AT-AT Walker"
          >
            The All Terrain Armored Transport (AT-AT) was a four-legged combat
            walker used by the ground forces of the Galactic Empire, and the
            First Order.
          </Slide>
          <Slide
            image={require('./images/3.jpg')}
            title="The Star Wars™ Battlefront™"
          >
            The Star Wars™ Battlefront™ Ultimate Edition has everything fans
            need to live out their Star Wars™ battle fantasies
          </Slide>
          <Slide
            image={require('./images/4.jpg')}
            title="Star Wars Experience - Legoland"
          >
            LEGOLAND Windsor a theme park dedicated to children aged 3-12 years
            old and of course big kid adults. An inspirational land where the
            kids are the hero and adults relive their childhood. The fun never
            stops and imagination knows no bounds, a family attraction like no
            other.
          </Slide>
          <Slide
            image={require('./images/5.jpg')}
            title="PlayStation Home: Star Wars"
          >
            Everyone loves Star Wars, right? And Indiana Jones? But do you love
            them so much you&lsquo;d sign into PlayStation Home and pay money
            for some virtual cosplay?
          </Slide>
        </Carousel>
      </Frame>
    );
  }
}
