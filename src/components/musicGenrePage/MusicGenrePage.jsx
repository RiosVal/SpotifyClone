import React from "react";
import { AppContentContainer } from '../appContentContainer/AppContentContainer';
import './MusicGenrePage.scss';

export function MusicGenrePage(props) {
    const {genre, songs, coverPhoto} = props;

    return(
        <AppContentContainer>
            <img src={coverPhoto} alt="" />
            <h2>{genre}</h2>
        </AppContentContainer>
    );
}