import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './components/Home';
import NormalGallery from './components/NormalGallery';
import Post from './components/BlogPost';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/gallery" component={withRouter(Gallery)} />
            <Route path="/baseline" component={withRouter(NormalGallery)} />
            <Route path="/blog-post/:postId" component={withRouter(Post)} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
