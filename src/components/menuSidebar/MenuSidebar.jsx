import React from "react";
import { MusicGenreRedirect } from "../musicGenreRedirect/MusicGenreRedirect";
import "./MenuSidebar.scss";

export function MenuSidebar() {
    return(
        <div className="sidebar-container">
            <h1>Menu</h1>
            <MusicGenreRedirect musicGenre={"Rock"}/>
            <MusicGenreRedirect musicGenre={"Regueton"}/>
            <MusicGenreRedirect musicGenre={"R&B"}/>
            <MusicGenreRedirect musicGenre={"Vallenato"}/>
            <MusicGenreRedirect musicGenre={"Pop"}/>
        </div>
    );
}