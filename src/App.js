import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Post from './components/BlogPost'
import TravelPost from './components/TravelPost'
import Travel from './components/Travel'
import Blogs from './components/Blogs'
import AIESEC from './components/AIESEC'
import Design2Code from './posts-studio/design2code'
import EsBuild from './posts-studio/es-build'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/aiesec">
            <AIESEC />
          </Route>
          {/* <Route path="/gallery">
            <Gallery />
          </Route> */}
          <Route exact path="/travel">
            <Travel />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
          <Route path="/travel/post/:postId">
            <TravelPost />
          </Route>
          <Route path="/design2code">
            <Design2Code />
          </Route>
          <Route path="/esbuild_monorepos">
            <EsBuild />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/404">404</Route>
        </Switch>
      </Router>
    )
  }
}

export default App
