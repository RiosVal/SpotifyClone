import React from "react";
import "./MusicGenreRedirect.scss";

export function MusicGenreRedirect({ musicGenre, href }) {
    return(
        <div className="genre-redirect-container">
            <a href={href}>{musicGenre}</a>
        </div>
    );
}