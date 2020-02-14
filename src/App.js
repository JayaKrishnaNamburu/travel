import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Post from './components/BlogPost';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/travel" exact>
              <Gallery />
            </Route>
            <Route path="/blog-post/:postId" exact>
              <Post />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
