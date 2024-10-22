import React from "react";
import "./ArtistComponent.scss";

export function ArtistComponent({ artistName, photoURL, onArtistClick }) {
    return (
        <button className="artist-component-button" onClick={() => onArtistClick(artistName)}>
            <img className="artist-img" src={photoURL} alt="" />
            <div className="artist-info">
                <p className="artist-name">{artistName}</p>
                <p className="artist-label">Artista</p>
            </div>
        </button>
    );
}

