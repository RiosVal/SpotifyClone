import React from "react";
import { Link } from "react-router-dom";
import "./MusicGenreRedirect.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function MusicGenreRedirect({ musicGenre, href, redirectLabel }) {
    const favoritesLabel = <div className="favorites-label">
        <FontAwesomeIcon icon={faStar} />
        {redirectLabel}
    </div>;

    const label = musicGenre != null ? musicGenre : favoritesLabel; 
    return(
        <div className="genre-redirect-container">
            <Link to={href}>{label}</Link>
        </div>
    );
}