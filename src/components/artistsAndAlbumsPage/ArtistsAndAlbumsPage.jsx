import React from "react";
import { ArtistComponent } from "../artistComponent/ArtistComponent";
import "./ArtistsAndAlbumsPage.scss";

export function ArtistsAndAlbumsPage() {
    const ladyGagaPhotoURL = "https://i.scdn.co/image/ab67616d0000b2738093238ec0c71ef7c95c8fb1";
    const feidPhotoURL = "https://i.scdn.co/image/ab67616100005174e82c62cc8cf019aecfd71ee8";
    const aerosmithPhotoURL = "https://i.scdn.co/image/ab67616d0000b273a7af122cd50575f63a156586";
    const aliciaKeysPhotoURL = "https://i.scdn.co/image/ab67616d00001e02a210590ab32a6d17777b0bf9";
    const silvestreDangondPhotoURl = "https://i.scdn.co/image/ab67616d0000b273354859da6a81577724fa0a2f";
    return(
        <div className="artists-albums-page-container">
            <div className="artists-container">
                <h2>Artistas</h2>
                
            </div>

            <div className="albums-container"></div>
        </div>
    );
}