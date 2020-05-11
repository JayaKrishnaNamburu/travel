import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Post from './components/BlogPost';
import Travel from './components/Travel';
import Blogs from './components/Blogs';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
