import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessToken } from '../utils/accountUtils';
import { Header } from './components/header/Header';
import { MenuSidebar } from './components/menuSidebar/MenuSidebar';
import { ArtistsAndAlbumsPage } from './components/artistsAndAlbumsPage/ArtistsAndAlbumsPage';
import { RockGenrePage } from './components/rockGenrePage/RockGenrePage';
import { ReguetonGenrePage } from './components/reguetonGenrePage/ReguetonGenrePage'
import { RbGenrePage } from './components/rAndBGenrePage/RbGenrePage';
import { VallenatoGenrePage } from './components/vallenatoGenrePage/VallenatoGenrePage';
import { PopGenrePage } from './components/popGenrePage/PopGenrePage';

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

  return (
    <Router>
      <>
        <Header />
        <div className='content-section'>
          <MenuSidebar />
          <Routes>
            <Route path='/' element={<ArtistsAndAlbumsPage />} />
            <Route path='/music-genre/rock' element={<RockGenrePage />} />
            <Route path='/music-genre/regueton' element={<ReguetonGenrePage />} />
            <Route path='/music-genre/r&b' element={<RbGenrePage />} />
            <Route path='/music-genre/vallenato' element={<VallenatoGenrePage />} />
            <Route path='/music-genre/pop' element={<PopGenrePage />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
