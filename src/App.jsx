import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Header } from './components/header/Header';
import { MenuSidebar } from './components/menuSidebar/MenuSidebar';
import { ArtistsAndAlbumsPage } from './components/artistsAndAlbumsPage/ArtistsAndAlbumsPage';
import { MusicGenrePage } from './components/musicGenrePage/MusicGenrePage';
import { musicGenresMap, GENRES_PHOTOS_URL, filterByMusicGenre, filterByFavoriteSongs } from '../utils/accountUtils';

import './App.scss'

function App() {
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
  const favoriteSongs = {
    songList: filterByFavoriteSongs(),
    coverPhotoURL: GENRES_PHOTOS_URL.favorites
  }

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
            <Route 
                path='/favorites' 
                element={<MusicGenrePage
                  genre={'favorites'}
                  pageTitle='Favoritos'
                  songs={favoriteSongs.songList}
                  coverPhoto={favoriteSongs.coverPhotoURL} />} />
            
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
