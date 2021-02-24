// *Switch* : to tell to React Router to load only one route at a time.
// A <Switch> looks through its children <Route>s and renders the first one that matches the current URL
// Link : To replace **a href**
// Default Route : to handle 404s

// useHistory Hook : So that we do not have to pull **history** from **props**
// useParams Hook : So that we do not have to access **params** from **props**

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory, useParams} from 'react-router-dom';
import "./index.css"

export default function App() {
	const name = "John Doe";
  return (
  <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
		<Switch>
			<Route exact path="/" render={() => <h1>Welcome to the world of React Router</h1>} component={Home}/>
			<Route path="/about/:name" render={() => <h1>Welcome to the world of React Router</h1>} component={About}/>
			<Route path="/contact" render={() => <h1>Welcome to the world of React Router</h1>} component={Contact}/>
			<Route render={() => <h1>404: page not found</h1>} /> // Default Route
		</Switch>
     </main>
  </Router>
  );
}
// Home Page
const Home = () => (
  <>
    <h1>Home</h1>
    <FakeText />
  </>
  );
// About Page
const About = () => {
	const params = useParams();
	return (
  <>
    <h1>About {params.name}</h1>
		{params.name !== 'John Doe' ? <Redirect to='/'/>: null}
    <FakeText />
  </>
)};
// Contact Page
const Contact = ({history1}) => {
	const history = useHistory();
  return <>
    <h1>Contact</h1>
	<button onClick={() => history.push('/')}> Go Home </button>
    <FakeText />
  </>
};

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  )
