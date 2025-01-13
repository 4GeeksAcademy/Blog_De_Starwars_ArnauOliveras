import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleStarship = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [starship, setStarship] = useState(null);

	useEffect(() => {
		const foundstarship = store.starshipsDetails.find(item => item.uid === params.theid);
		setStarship(foundstarship);

	}, [store.starshipsDetails, starship]);

	if (!starship) {
		return <div></div>;
	}
	return (
		<div className="container">
			<div className="d-flex justify-content-between">
				<div className="p-5">
					<img src={"https://starwars-visualguide.com/assets/img/starships/" + params.theid + ".jpg"} className="card-img-top" alt={starship.properties.name} />
				</div>
				<div className="p-5 text-centred">
					<h1>{starship.properties.name}</h1>
					<p>{starship.description}</p>

				</div>
			</div>
			<div className="bg-danger p-1"></div>
			<div className="d-flex justify-content-between text-danger">
					<div><h6>Name</h6><p>{starship.properties.name}</p></div>
					<div><h6>Consumables</h6><p>{starship.properties.consumables}</p></div>
					<div><h6>Cost In Credits</h6><p>{starship.properties.cost_in_credits}</p></div>
					<div><h6>Length</h6><p>{starship.properties.length}</p></div>
					<div><h6>Passengers</h6><p>{starship.properties.passengers}</p></div>
					<div><h6>Max Atmosphering Speed</h6><p>{starship.properties.max_atmosphering_speed}</p></div>
			</div>
		</div>
	);
};

