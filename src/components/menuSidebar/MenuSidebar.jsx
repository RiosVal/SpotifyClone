import React from "react";
import { MusicGenreRedirect } from "../musicGenreRedirect/MusicGenreRedirect";
import "./MenuSidebar.scss";

export function MenuSidebar() {
    return(
        <div className="sidebar-container">
            <h1>Menu</h1>
            <MusicGenreRedirect href={"/music-genre/rock"} musicGenre={"Rock"}/>
            <MusicGenreRedirect href={"/music-genre/regueton"} musicGenre={"Regueton"}/>
            <MusicGenreRedirect href={"/music-genre/r&b"} musicGenre={"R&B"}/>
            <MusicGenreRedirect href={"/music-genre/vallenato"} musicGenre={"Vallenato"}/>
            <MusicGenreRedirect href={"/music-genre/pop"} musicGenre={"Pop"}/>
        </div>
    );
}