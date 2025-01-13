import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({ name, imgSrc, uid, addToFavorites }) => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const foundCharacter = store.characterDetails.find(item => item.uid === uid);
        setCharacter(foundCharacter);

    }, [store.characterDetails, uid, character]);

    if (!character) {
        return <div className="card" style={{ width: '18rem', display: 'inline-block', marginRight: '10px' }}></div>;
    }

    const { gender, hair_color, eye_color } = character.properties || {};

    return (
        <div className="card" style={{ width: '18rem', display: 'inline-block', marginRight: '10px' }}>
            <img src={"https://starwars-visualguide.com/assets/img/" + imgSrc + ".jpg"} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text my-1">Gender: {gender || 'N/A'}</p>
                <p className="card-text my-1">Hair color: {hair_color || 'N/A'}</p>
                <p className="card-text my-1">Eye color: {eye_color || 'N/A'}</p>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={"/character/" + uid} className="btn btn-outline-primary">Learn More!</Link>
                    <a onClick={addToFavorites} className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </div>
    );
}