import React from "react";
import "./PlaylistComponent.scss";

export function PlaylistComponent({playlistName, playlistPhotoURL}) {
    return(
        <button>
            <img className="playlist-img" src={playlistPhotoURL} alt="" />
            <div className="playlist-info">
                <p className="playlist-name">{playlistName}</p>
            </div>
        </button>
    );
}