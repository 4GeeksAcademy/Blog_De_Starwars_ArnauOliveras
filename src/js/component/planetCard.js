import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = ({ name, imgSrc, uid, addToFavorites }) => {
    const { store } = useContext(Context);
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const foundPlanet = store.planetsDetails.find(item => item.uid === uid);
        setPlanet(foundPlanet);
    }, [store.planetsDetails, uid]);

    if (!planet) {
        return <div className="card" style={{ width: '18rem', display: 'inline-block', marginRight: '10px' }}></div>;
    }

    const { population, terrain } = planet.properties || {};

    return (
        <div className="card" style={{ width: '18rem', display: 'inline-block', marginRight: '10px' }}>
            <img src={"https://starwars-visualguide.com/assets/img/" + imgSrc + ".jpg"} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text my-1">Population: {population}</p>
                <p className="card-text my-1">Terrain: {terrain}</p>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={"/planet/" + uid} className="btn btn-outline-primary">Learn More!</Link>
                    <a onClick={addToFavorites} className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </div>
    );
}