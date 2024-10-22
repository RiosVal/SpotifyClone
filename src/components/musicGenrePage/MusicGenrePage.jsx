import React, { useState } from "react";
import { AppContentContainer } from "../appContentContainer/AppContentContainer";
import { SongComponent } from "../songComponent/SongComponent";
import { YoutubeModal } from "../youtubeModal/YoutubeModal"; // Importar el modal
import "./MusicGenrePage.scss";

export function MusicGenrePage(props) {
    const { genre, pageTitle, songs, coverPhoto } = props;
    const classNames = `genre-page--header ${genre}`;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoURL, setCurrentVideoURL] = useState("");

    const openModal = (videoURL) => {
        setCurrentVideoURL(videoURL);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideoURL("");
    };

    return (
        <AppContentContainer>
            <div className={classNames}>
                <img src={coverPhoto} alt="" />
                <div className="genre-page--header-title">
                    <h1>{pageTitle}</h1>
                    <p>Género musical</p>
                </div>
            </div>

            {/* Contenedor para la lista de canciones y modal */}
            <div className="genre-page--songlist-container">
                {songs.map((song, index) => (
                    <SongComponent
                        key={index}
                        song={song}
                        index={index}
                        openModal={openModal} // Pasar la función de apertura del modal
                    />
                ))}
            </div>

            {/* Modal de YouTube */}
            <YoutubeModal
                isOpen={isModalOpen}
                onClose={closeModal}
                videoURL={currentVideoURL}
            />
        </AppContentContainer>
    );
}
