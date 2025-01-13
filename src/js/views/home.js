import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { SpaceshipCard } from "../component/spaceshipCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-5">
			<div className="my-3">
				<h3 className="text-danger">Characters</h3>
				<div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '20px' }}>
					{store.people.map((item, index) => (
						<CharacterCard
							key={index}
							name={item.name}
							imgSrc={"characters/" + item.uid}
							uid={item.uid}
							addToFavorites={() => actions.addToFavorites({ uid: item.uid, name: item.name, type: 'character' })}
						/>
					))}
				</div>
			</div>
			<div className="my-3">
				<h3 className="text-danger">Planets</h3>
				<div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '20px' }}>
					{store.planets.map((item, index) => (
						<PlanetCard
							key={index}
							name={item.name}
							imgSrc={"planets/" + item.uid}
							uid={item.uid}
							addToFavorites={() => actions.addToFavorites({ uid: item.uid, name: item.name, type: 'planet' })}
						/>
					))}
				</div>
			</div>
			<div className="my-3">
				<h3 className="text-danger">Starships</h3>
				<div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '20px' }}>
					{store.starships.map((item, index) => (
						<SpaceshipCard
							key={index}
							name={item.name}
							imgSrc={"starships/" + item.uid}
							uid={item.uid}
							addToFavorites={() => actions.addToFavorites({ uid: item.uid, name: item.name, type: 'starship' })}
						/>
					))}
				</div>
			</div>
		</div>
	);
};