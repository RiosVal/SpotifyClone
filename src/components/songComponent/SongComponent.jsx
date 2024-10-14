import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import './SongComponent.scss';

export function SongComponent({ song, index }) {
    const {songName, artist, songPhotoURL, videoURL, isFavSong} = song;

    return (
        <div className="song-container">
            <Link className="song-info">
                <p>{index + 1}</p>
                <img src={songPhotoURL} alt="" />
                <div className="title-and-artist">
                    <p className="title">{songName}</p>
                    <p className="artist">{artist}</p>
                </div>
            </Link>
            <button>
                <FontAwesomeIcon icon={faStar} />
            </button>
        </div>
    );
}