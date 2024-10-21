import React, { useState, useEffect } from 'react';
import { SongComponent } from '../songComponent/SongComponent';
import './FavoritesPage.scss';

export function FavoritesPage() {
    const [favoriteSongs, setFavoriteSongs] = useState([]);

    // Cargar las canciones favoritas al montar el componente
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteSongs(favorites);
    }, []);

    return (
        <div className="favorites-page">
            <h2>Favoritos</h2>
            {favoriteSongs.length === 0 ? (
                <p>No tienes canciones favoritas.</p>
            ) : (
                favoriteSongs.map((song, index) => (
                    <SongComponent key={song.id} song={song} index={index} />
                ))
            )}
        </div>
    );
}
