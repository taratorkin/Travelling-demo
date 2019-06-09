import React, { Component, Fragment } from 'react';
import Header from './Header';
import PopularPlaces from './PopularPlaces';
import Switzerland from './Switzerland';
import Honeymoon from './Honeymoon';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <PopularPlaces></PopularPlaces>
        <Switzerland></Switzerland>
        <Honeymoon></Honeymoon>
      </Fragment>
    );
  }
}

export default App;
