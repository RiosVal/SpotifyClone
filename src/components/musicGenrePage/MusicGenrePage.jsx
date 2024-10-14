import React from "react";
import { AppContentContainer } from '../appContentContainer/AppContentContainer';
import './MusicGenrePage.scss';

export function MusicGenrePage(props) {
    const {genre, pageTitle, songs, coverPhoto} = props;

    const classNames = `genre-page--header ${genre}`;
    return(
        <AppContentContainer>
            <div className={classNames}>
                <img src={coverPhoto} alt="" />
                <div className="genre-page--header-title">
                    <h1>{pageTitle}</h1>
                    <p>Género musical</p>
                </div>
            </div>
        </AppContentContainer>
    );
}