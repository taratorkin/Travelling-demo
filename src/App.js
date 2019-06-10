import React, { Component, Fragment } from 'react';
import Header from './Header';
import PopularPlaces from './PopularPlaces';
import Switzerland from './Switzerland';
import Honeymoon from './Honeymoon';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <PopularPlaces></PopularPlaces>
        <Switzerland></Switzerland>
        <Honeymoon></Honeymoon>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;
