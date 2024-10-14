import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessToken } from '../utils/accountUtils';
import { Header } from './components/header/Header';
import { MenuSidebar } from './components/menuSidebar/MenuSidebar';
import { ArtistsAndAlbumsPage } from './components/artistsAndAlbumsPage/ArtistsAndAlbumsPage';
import { MusicGenrePage } from './components/musicGenrePage/MusicGenrePage';
import { musicGenresMap, GENRES_PHOTOS_URL, filterByMusicGenre } from '../utils/accountUtils';

import './App.scss'

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchSpotifyProfile = async () => {
      try {
        const accessToken = await getAccessToken();
        const config = {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        };
        const response = await axios.get('https://api.spotify.com/v1/me', config);
        setProfile(response.data);
      } catch (error) {
        console.error('Error obteniendo los datos de Spotify', error);
      }
    };

    fetchSpotifyProfile();
  }, []);  // Ejecutar al montar el componente

  const rockSongs = {
    songList: filterByMusicGenre(musicGenresMap.rock),
    coverPhotoURL: GENRES_PHOTOS_URL.rock
  };
  const reguetonSongs = {
    songList: filterByMusicGenre(musicGenresMap.regueton),
    coverPhotoURL: GENRES_PHOTOS_URL.regueton
  };
  const rAndBSongs = {
    songList: filterByMusicGenre(musicGenresMap.rAndB),
    coverPhotoURL: GENRES_PHOTOS_URL.rAndB
  };
  const vallenatoSongs = {
    songList: filterByMusicGenre(musicGenresMap.vallenato),
    coverPhotoURL: GENRES_PHOTOS_URL.vallenato
  };
  const popSongs = {
    songList: filterByMusicGenre(musicGenresMap.pop),
    coverPhotoURL: GENRES_PHOTOS_URL.pop
  };


  return (
    <Router>
      <>
        <Header />
        <div className='content-section'>
          <MenuSidebar />
          <Routes>
            <Route 
              path='/' 
              element={<ArtistsAndAlbumsPage />} />
            <Route 
              path='/music-genre/rock' 
              element={<MusicGenrePage
                genre={'rock'}
                pageTitle='Rock'
                songs={rockSongs.songList}
                coverPhoto={GENRES_PHOTOS_URL.rock} />} />
            <Route 
              path='/music-genre/regueton' 
              element={<MusicGenrePage
                genre={'regueton'}
                pageTitle='Regueton'
                songs={reguetonSongs.songList}
                coverPhoto={reguetonSongs.coverPhotoURL} />} />
            <Route 
              path='/music-genre/r&b' 
              element={<MusicGenrePage
                genre={'rAndB'}
                pageTitle='R&B'
                songs={rAndBSongs.songList}
                coverPhoto={rAndBSongs.coverPhotoURL} />} />
            <Route 
              path='/music-genre/vallenato' 
              element={<MusicGenrePage
                genre={'vallenato'}
                pageTitle='Vallenato'
                songs={vallenatoSongs.songList}
                coverPhoto={vallenatoSongs.coverPhotoURL} />} />
            <Route 
              path='/music-genre/pop' 
              element={<MusicGenrePage
                genre={'pop'}
                pageTitle='Pop'
                songs={popSongs.songList}
                coverPhoto={popSongs.coverPhotoURL} />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
