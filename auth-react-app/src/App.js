import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import JokesList from "./Components/Jokes/JokesList";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<nav>
						<Link to="/api/register">Sign Up</Link>
						&nbsp; | &nbsp;
						<Link to="/api/login">Sign In</Link>
						&nbsp; | &nbsp;
						<Link to="/api/jokes">Dad Jokes</Link>
					</nav>
				</header>
				{/* <SignUp />
				<SignIn />
				<JokesList /> */}
				<Route path="/api/login" component={SignIn} />
				<Route path="/api/jokes" component={JokesList} />
				<Route path="/api/register" component={SignUp} />
			</div>
		);
	}
}

export default App;
