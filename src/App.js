import React, { Component, Suspense } from 'react';
import './App.css';

class App extends Component {
  render() {
    const Map = React.lazy(() => import('./components/Map'));
    return (
      <div className="App">
        <div className="portfolio">
          <div>
            <h1>Jaya Krishna Namburu</h1>
          </div>
          <div>
            <Suspense fallback={<div>Loding...</div>}>
              <Map />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
