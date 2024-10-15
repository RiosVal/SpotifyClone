import React from "react";
import "./ArtistComponent.scss";

export function ArtistComponent({ artistName, photoURL}) {
    return(
        <button className="artist-component-button">
            <img className="artist-img" src={photoURL} alt="" />
            <div className="artist-info">
                <p className="artist-name">{artistName}</p>
                <p className="artist-label">Artista</p>
            </div>
        </button>
    );
}