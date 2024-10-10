import React from "react";
import { Link } from "react-router-dom";
import "./MusicGenreRedirect.scss";

export function MusicGenreRedirect({ musicGenre, href }) {
    return(
        <div className="genre-redirect-container">
            <Link className="redirect-link" to={href}>{musicGenre}</Link>
        </div>
    );
}