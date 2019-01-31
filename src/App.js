import React, { Component, Suspense } from 'react';
import './App.css';
import Blog from './components/Blog';
import back from './images/back.jpg';

class App extends Component {
  render() {
    const Map = React.lazy(() => import('./components/Map'));
    return (
      <div className="App">
        <div className="portfolio">
          <div className="user">
            <img src={back} alt="bigPicture" className="bigPicture" />
          </div>
          <div>
            <Suspense fallback={<div>Loding...</div>}>
              <Map />
            </Suspense>
          </div>
        </div>
        <Blog />
      </div>
    );
  }
}

export default App;
