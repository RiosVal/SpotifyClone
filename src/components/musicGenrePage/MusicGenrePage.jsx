import React from "react";
import { AppContentContainer } from '../appContentContainer/AppContentContainer';

export function MusicGenrePage(props) {
    const {pageTitle} = props;
    return(
        <AppContentContainer>
            <h2>{pageTitle}</h2>
        </AppContentContainer>
    );
}