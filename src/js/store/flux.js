const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			characterDetails: [],
			planetsDetails: [],
			starshipsDetails: [],
			favorites: []

		},
		actions: {
			addToFavorites: (item) => {
			const store = getStore();
			if (!store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type)) { 
				setStore({ favorites: [...store.favorites, item] });
			}
			
		},
		removeFavorites: (item) => {
			const store = getStore();
			setStore({ favorites: store.favorites.filter(favorite => favorite !== item) });
		},
			loadData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ people: data.results });
						data.results.forEach(character => getActions().LoadCharacterData(character.uid));
					})
					.catch(err => console.error(err))



				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ planets: data.results });
						data.results.forEach(planet => getActions().LoadPlanetData(planet.uid));
					})
					.catch(err => console.error(err))

				fetch("https://www.swapi.tech/api/starships/")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ starships: data.results });
						data.results.forEach(starship => getActions().LoadStarshipData(starship.uid));
					})
					.catch(err => console.error(err))


			},
			LoadCharacterData: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data => {
						const character = data.result;
						const currentCharacterDetails = getStore().characterDetails;
						setStore({ characterDetails: [...currentCharacterDetails, character] });
						
					})
					.catch(err => console.error(err));
			},
			LoadPlanetData: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(res => res.json())
					.then(data => {
						const planet = data.result;
						const currentPlanetsDetails = getStore().planetsDetails;
						setStore({ planetsDetails: [...currentPlanetsDetails, planet] });

					})
					.catch(err => console.error(err));
			},
			LoadStarshipData: (id) => {
				fetch("https://www.swapi.tech/api/starships/" + id)
					.then(res => res.json())
					.then(data => {
						const starship = data.result;
						const currentStarshipsDetails = getStore().starshipsDetails;
						setStore({ starshipsDetails: [...currentStarshipsDetails, starship] });
					})
					.catch(err => console.error(err));
			}

		}
	};
};

export default getState;
