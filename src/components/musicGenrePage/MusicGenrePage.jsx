import React from "react";
import { AppContentContainer } from '../appContentContainer/AppContentContainer';
import { musicGenresMap } from "../../../utils/accountUtils";
import './MusicGenrePage.scss';

export function MusicGenrePage(props) {
    const {genre, songs, coverPhoto} = props;

    const classNames = `genre-page--header ${genre}`;
    return(
        <AppContentContainer>
            <div className={classNames}>
                <img src={coverPhoto} alt="" />
                <div className="genre-page--header-title">
                    <h2>{musicGenresMap.genre}</h2>
                </div>
            </div>
        </AppContentContainer>
    );
}