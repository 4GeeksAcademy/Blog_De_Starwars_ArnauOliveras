import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [character, setCharacter] = useState(null);

	useEffect(() => {
		const foundCharacter = store.characterDetails.find(item => item.uid === params.theid);
		setCharacter(foundCharacter);

	}, [store.characterDetails, character]);

	if (!character) {
		return <div></div>;
	}
	return (
		<div className="container">
			<div className="d-flex justify-content-between">
				<div className="p-5">
					<img src={"https://starwars-visualguide.com/assets/img/characters/" + params.theid + ".jpg"} className="card-img-top" alt={character.properties.name} />
				</div>
				<div className="p-5 text-centred">
					<h1>{character.properties.name}</h1>
					<p>{character.description}</p>

				</div>
			</div>
			<div className="bg-danger p-1"></div>
			<div className="d-flex justify-content-between text-danger">
					<div><h6>Name</h6><p>{character.properties.name}</p></div>
					<div><h6>Birth Year</h6><p>{character.properties.birth_year}</p></div>
					<div><h6>Gender</h6><p>{character.properties.gender}</p></div>
					<div><h6>Height</h6><p>{character.properties.height}</p></div>
					<div><h6>Skin Color</h6><p>{character.properties.skin_color}</p></div>
					<div><h6>Eye Color</h6><p>{character.properties.eye_color}</p></div>
			</div>
		</div>
	);
};

