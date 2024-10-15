import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './PlaySongButton.scss';

export function PlaySongButton({ openModal }) {
    return(
        <button onClick={() => openModal} className="play-song-button">
            <FontAwesomeIcon icon={faPlay} />
        </button>
    );
}