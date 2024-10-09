import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Searchbar.scss';

export function Searchbar() {
    return(
        <div className="search-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"  />
            <input type="text" placeholder="¿Qué quieres reproducir?" />
        </div>
    );
}