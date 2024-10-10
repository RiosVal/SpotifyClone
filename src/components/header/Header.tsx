import React from "react";
import { RedirectButton } from "../generics/RedirectButton";
import { Searchbar } from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

export function Header() {
    return(
        <div className="header-container">
            <FontAwesomeIcon icon={faSpotify} className="spotify-icon" />
            <div className="searching-container">
                <RedirectButton href={"/"} propIcon={faHome}/>
                <Searchbar />
            </div>
            <div className="account-loggin-container">
                <RedirectButton propIcon={faUser} />
            </div>
        </div>
    );
}