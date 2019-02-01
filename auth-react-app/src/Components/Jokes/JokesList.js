import React from "react";
import axios from "axios";

class JokesList extends React.Component {
	constructor() {
		super();
		this.state = {
			jokes: [],
		};
	}

	async componentDidMount() {
		const endpoint = `http://localhost:3300/api/jokes`;
		const token = localStorage.getItem("token");
		try {
			const response = await axios.get(endpoint, {
				headers: {
					authorization: token,
				},
			});
			console.log(response);
			this.setState({ jokes: response.data });
		} catch (err) {
			console.error("There has been an error at JokesList CDM", err);
		}
	}

	logOut = () => {
		window.localStorage.removeItem("token");
		window.location.reload();
	};

	render() {
		return (
			<div>
				<h1>Dad Jokes</h1>
				<ul>
					{this.state.jokes.map(joke => (
						<li key={joke.id}>{joke.joke}</li>
					))}
				</ul>
				<button className="logout-button" onClick={this.logOut}>
					Log Out
				</button>
			</div>
		);
	}
}

export default JokesList;
