import React from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate para la navegación
import "./ArtistComponent.scss";

export function ArtistComponent({ artistName, photoURL }) {
    const navigate = useNavigate(); // Inicializar la navegación

    const handleArtistClick = () => {
        const formattedName = artistName.replace(/\s+/g, "%20"); // Formatear espacios
        navigate(`/artist/${formattedName}`); // Redirigir a la ruta del artista
    };

    return (
        <button className="artist-component-button" onClick={handleArtistClick}>
            <img className="artist-img" src={photoURL} alt={artistName} />
            <div className="artist-info">
                <p className="artist-name">{artistName}</p>
                <p className="artist-label">Artista</p>
            </div>
        </button>
    );
}
