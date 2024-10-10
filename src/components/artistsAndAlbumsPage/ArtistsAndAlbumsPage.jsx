import React from "react";
import { ArtistComponent } from "../artistComponent/ArtistComponent";
import { SONGS_BY_ARTIST } from "../../../utils/accountUtils";
import "./ArtistsAndAlbumsPage.scss";

export function ArtistsAndAlbumsPage() {
    return(
        <div className="artists-albums-page-container">
            <div className="artists-container">
                <h2>Artistas</h2>
                <div className="artists-page-components-container">
                    {SONGS_BY_ARTIST.slice(0, 5).map(artist => (
                        <ArtistComponent artistName={artist.artistName} photoURL={artist.photoURL} />
                    ))}
                </div> 
            </div>

            <div className="albums-container"></div>
        </div>
    );
}