// Joke.js

import React from "react";

import Button from "./Button.js";
import './Joke.css';


const Joke = () => {
	const [Joke, setJoke] = React.useState("");

	const fetchApi = () => {
		fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
			.then((res) => res.json())
			.then((data) => setJoke(data.joke));
	};

    // setInterval(fetchApi,300000)

	return (
		<div className="joke">
         <Button callApi={fetchApi} />
			<p>{Joke}</p>
		</div>
	);
}

export default Joke;
