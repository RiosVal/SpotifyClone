import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './tokens';

const data = new URLSearchParams();
data.append('grant_type', 'client_credentials');
data.append('client_id', CLIENT_ID);
data.append('client_secret', CLIENT_SECRET);

export const getAccessToken = async () => {

    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', CLIENT_ID);
    data.append('client_secret', CLIENT_SECRET);
  
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      return response.data.access_token;  // Devolver el access token
    } catch (error) {
      console.error('Error obteniendo el access token', error);
      throw error;  // Propagar el error
    }
};