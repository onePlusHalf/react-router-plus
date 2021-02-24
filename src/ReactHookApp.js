
import React, { useState , useEffect} from "react";
import "./index.css"

export default function ReactHookApp() {
    const [count, setCount] = useState(0);
	const name = "John Doe";

	useEffect(() => {
	    alert(`Count is ${count}`);
    });
  return (
    <main>
      <nav>
        <ul>
            <li>Well, i'm using React Hooks to get and set this counter : {count}</li>
            <button onClick={() => setCount(count+1)}>Click on me to increment Counter</button>
          <li><a href to="/">Home</a></li>
          <li><a href={`/about/${name}`}>About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>
     </main>
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
	return (
  <>
    {/*<h1>About {params.name}</h1>*/}
		{/*{params.name !== 'John Doe' ? <Redirect to='/'/>: null}*/}
    <FakeText />
  </>
)};
// Contact Page
const Contact = ({history1}) => {
  return <>
    <h1>Contact</h1>
	{/*<button onClick={() => history.push('/')}> Go Home </button>*/}
    <FakeText />
  </>
};

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  );
