import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { PlaySongButton } from "../playSongButton/PlaySongButton";
import './SongComponent.scss';

export function SongComponent({ song, index }) {
    const {songName, artist, songPhotoURL, videoURL, isFavSong} = song;

    return (
        <div className="song-container">
            <Link className="song-info">
                <div className="play-song-button-and-index-container">
                    <p className="index">{index + 1}</p>
                    <div className="play-button-wrapper">
                        <PlaySongButton />
                    </div>
                </div>
                <img src={songPhotoURL} alt="" />
                <div className="title-and-artist">
                    <p className="title">{songName}</p>
                    <p className="artist">{artist}</p>
                </div>
            </Link> 
            <button className="song-component-star-icon">
                <FontAwesomeIcon icon={faStar} />
            </button>
        </div>
    );
}