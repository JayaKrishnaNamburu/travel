import React, { Component, Suspense } from 'react';
import './App.css';
import Blog from './components/Blog';

class App extends Component {
  render() {
    const Map = React.lazy(() => import('./components/Map'));
    return (
      <div className="App">
        <div className="portfolio">
          <div className="user">
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
