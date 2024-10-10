import { BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAccessToken } from '../utils/accountUtils';
import { Header } from './components/header/Header';
import { MenuSidebar } from './components/menuSidebar/MenuSidebar';
import { ArtistsAndAlbumsPage } from './components/artistsAndAlbumsPage/ArtistsAndAlbumsPage';

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
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
