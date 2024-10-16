import React from "react";
import { AppContentContainer } from "../appContentContainer/AppContentContainer";
import { ArtistComponent } from "../artistComponent/ArtistComponent";
import { PlaylistComponent } from "../playlistComponent/PlaylistComponent";
import { ARTISTS, PLAYLISTS} from "../../../utils/accountUtils";
import "./ArtistsAndAlbumsPage.scss";

export function ArtistsAndAlbumsPage() {
    return(
        <AppContentContainer>
            <div className="artist-albums-page--container">
                <div className="artists-container">
                    <h2>Artistas</h2>
                    <div className="artists-page-components-container">
                        {ARTISTS.slice(4, 9).map(artist => (
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
        </AppContentContainer>
    );
}