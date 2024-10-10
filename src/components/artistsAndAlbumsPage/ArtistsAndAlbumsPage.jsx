import React from "react";
import { ArtistComponent } from "../artistComponent/ArtistComponent";
import { PlaylistComponent } from "../playlistComponent/PlaylistComponent";
import { SONGS_BY_ARTIST, PLAYLISTS } from "../../../utils/accountUtils";
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

            <div className="playlists-container">
                <h2>Playlists</h2>
                <div className="playlists-page-components-container">
                    {PLAYLISTS.map(playlist => (
                        <PlaylistComponent playlistName={playlist.playlistName} 
                                           playlistPhotoURL={playlist.playlistPhotoURL} />
                    ))}
                </div>
            </div>
        </div>
    );
}