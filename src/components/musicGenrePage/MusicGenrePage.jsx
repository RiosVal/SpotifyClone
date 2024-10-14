import React from "react";
import { AppContentContainer } from '../appContentContainer/AppContentContainer';

export function MusicGenrePage(props) {
    const {genre} = props;

    return(
        <AppContentContainer>
            <h2>{genre}</h2>
        </AppContentContainer>
    );
}