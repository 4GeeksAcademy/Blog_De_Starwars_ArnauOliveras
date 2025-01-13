import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [planet, setPlanet] = useState(null);

	useEffect(() => {
		const foundplanet = store.planetsDetails.find(item => item.uid === params.theid);
		setPlanet(foundplanet);

	}, [store.planetsDetails, planet]);

	if (!planet) {
		return <div></div>;
	}
	return (
		<div className="container">
			<div className="d-flex justify-content-between">
				<div className="p-5">
					<img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="card-img-top" alt={planet.properties.name} />
				</div>
				<div className="p-5 text-centred">
					<h1>{planet.properties.name}</h1>
					<p>{planet.description}</p>

				</div>
			</div>
			<div className="bg-danger p-1"></div>
			<div className="d-flex justify-content-between text-danger">
					<div><h6>Name</h6><p>{planet.properties.name}</p></div>
					<div><h6>Climate</h6><p>{planet.properties.climate}</p></div>
					<div><h6>Population</h6><p>{planet.properties.population}</p></div>
					<div><h6>Orbital Period</h6><p>{planet.properties.orbital_period}</p></div>
					<div><h6>Rotation Period</h6><p>{planet.properties.rotation_period}</p></div>
					<div><h6>Diameter</h6><p>{planet.properties.diameter}</p></div>
			</div>
		</div>
	);
};

