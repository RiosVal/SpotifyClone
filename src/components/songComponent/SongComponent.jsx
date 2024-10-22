import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { PlaySongButton } from "../playSongButton/PlaySongButton";
import { YoutubeModal } from "../youtubeModal/YoutubeModal";
import './SongComponent.scss';

export function SongComponent({ song, index, onFavoriteChange, openModal }) {
    const { songName, artist, songPhotoURL, videoURL, id } = song;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some(fav => fav.id === id));
    }, [id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = favorites.filter(fav => fav.id !== id);
            console.log(`Canción eliminada de favoritos: ${songName}`);
        } else {
            updatedFavorites = [...favorites, { ...song, isFavSong: true }];
            console.log(`Canción añadida a favoritos: ${songName}`);
        }

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
        onFavoriteChange();  // Notificar cambio al componente principal
    };

    return (
        <div className="song-container">
            <Link className="song-info">
                <div className="play-song-button-and-index-container">
                    <p className="index">{index + 1}</p>
                    <div className="play-button-wrapper">
                        {/* Se ajusta para que abra el modal con la URL correcta */}
                        <PlaySongButton openModal={() => openModal(videoURL)} />
                    </div>
                </div>
                <img src={songPhotoURL} alt={songName} />
                <div className="title-and-artist">
                    <p className="title">{songName}</p>
                    <p className="artist">{artist}</p>
                </div>
            </Link>
            <button className="song-component-star-icon" onClick={toggleFavorite}>
                <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
            </button>
        </div>
    );
}
