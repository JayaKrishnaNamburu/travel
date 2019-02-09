import React, { Component, Suspense } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import back from './compressed/images/generic/back.jpg';

class App extends Component {
  render() {
    const Map = React.lazy(() => import('./components/Map'));
    return (
      <div className="App">
        <div className="portfolio">
          <div className="user">
            <img src={back} alt="bigPicture" className="bigPicture" />
          </div>
          <div className="map">
            <Suspense fallback={<div>Loding...</div>}>
              <Map />
            </Suspense>
          </div>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Gallery />
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
