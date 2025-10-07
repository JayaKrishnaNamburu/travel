import { Component, Suspense, lazy } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const Header = lazy(() => import('./components/Header'))
const Gallery = lazy(() => import('./components/Gallery'))
const Home = lazy(() => import('./components/Home'))
const Post = lazy(() => import('./components/BlogPost'))
const Blogs = lazy(() => import('./components/Blogs'))
const AIESEC = lazy(() => import('./components/AIESEC'))
const Design2Code = lazy(() => import('./posts-studio/design2code'))
const EsBuild = lazy(() => import('./posts-studio/es-build'))
// const Travel = lazy(() => import('./components/Travel'))

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route path="/aiesec">
              <AIESEC />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/post/:postId">
              <Post />
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
            {/* <Route path="/map">
              <Travel />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
            <Route path="/404">404</Route>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default App
