import React from "react";
import axios from "axios";

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const endpoint = `http://localhost:3300/api/login`;

		axios
			.post(endpoint, this.state)
			.then(res => {
				localStorage.setItem("token", res.data.token);
			})
			.catch(err => console.error(err));
	};

	render() {
		console.log(this);
		return (
			<form className="signin-form" onSubmit={this.handleSubmit}>
				<h1>Sign In</h1>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<button type="submit">Log in</button>
			</form>
		);
	}
}

export default SignIn;
