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

 export const musicGenresMap = {
  rAndB: 'R&B',
  rock: 'Rock',
  regueton: 'Regueton',
  pop: 'Pop',
  vallenato: 'Vallenato'
}

export const GENRES_PHOTOS_URL = {
  rock: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da840774a242a12ead585708fa16',
  pop: 'https://i.scdn.co/image/ab67616d0000b273d48b3ca7ced155aa46324088',
  regueton: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84de893c4d8772ed9630ba31e3',
  rAndB: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84cda10d38cbb1fdf978c9a6ca',
  vallenato: 'https://i.scdn.co/image/ab67706f00000002c055a8784448dd140a5682bc'
}

export const ARTISTS = [
  {id: 1,
    artistName: 'Feid',
    photoURL: 'https://i.scdn.co/image/ab67616100005174e82c62cc8cf019aecfd71ee8',
    songs: [1, 2, 3, 4, 5]
  },
  {id: 2,
    artistName: 'Lady Gaga',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b2738093238ec0c71ef7c95c8fb1',
    songs: [6, 7, 8, 9, 10]
  },
  {id: 3,
    artistName: 'Aerosmith',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b273a7af122cd50575f63a156586',
    songs: [11, 12, 13, 14, 15]
  },
  {id: 4,
    artistName: 'Alicia Keys',
    photoURL: 'https://i.scdn.co/image/ab67616d00001e02a210590ab32a6d17777b0bf9',
    songs: [16, 17, 18, 19, 20]
  },
  {id: 5,
    artistName: 'Silvestre Dangond',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b273354859da6a81577724fa0a2f',
    songs: [21, 22, 23, 24, 25]
  },
  {id: 6,
    artistName: 'Michael Jackson',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97',
    songs: [26, 27, 28, 29, 30]
  },
  {id: 7,
    artistName: 'Karol G',
    photoURL: 'https://i.scdn.co/image/ab6761610000e5eb4b0754aefc9db490e02205ec',
    songs: [31, 32, 33, 34, 35]
  },
  {id: 8,
    artistName: 'Metallica',
    photoURL: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1sJmec-default.jpg',
    songs: [36, 37, 38, 39, 40]
  },
  {id: 9,
    artistName: 'Whitney Houston',
    photoURL: 'https://i.scdn.co/image/ab6761610000e5ebcd9f60ab57585bf3b77ecc51',
    songs: [41, 42, 43, 44, 45]
  },
  {id: 10, 
    artistName: 'Binomio de Oro', 
    photoURL: 'https://i.scdn.co/image/ab6761610000e5eb813e7b32f71bf7229db29e1b', 
    songs: [46, 47, 48, 49, 50]
  },
];

export const SONGS = [
  {
    id: 1,
    songName: 'LUNA',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242',
    videoURL: 'https://www.youtube.com/watch?v=ZA7ZKB8Mo9k',
    isFavSong: false,
    genre: musicGenresMap.regueton,
    artistId: 1
  },
  {
    id: 2,
    songName: 'SE ME OLVIDA',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273edd9fbb8df345ace64a558d7',
    videoURL: 'https://www.youtube.com/watch?v=ROgcM9-N9jM',
    isFavSong: true,
    genre: musicGenresMap.regueton,
    artistId: 1
  },
  {
    id: 3,
    songName: 'PERRO NEGRO',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d00001e027cc7b0d6a82846cd8b158f99',
    videoURL: 'https://www.youtube.com/watch?v=a6tgD_CsYTQ',
    isFavSong: true,
    genre: musicGenresMap.regueton,
    artistId: 1
  },
  {
    id: 4,
    songName: 'SORRY 4 THAT MUCH',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273746cdeef8d4a4110f1b5af29',
    videoURL: 'https://www.youtube.com/watch?v=Q2ftMmazZCU',
    isFavSong: true,
    genre: musicGenresMap.regueton,
    artistId: 1
  },
  {
    id: 5,
    songName: 'HABLAME CLARO',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273aac05e76abbf5a43d5705766',
    videoURL: 'https://www.youtube.com/watch?v=wPGn8iqoyGY',
    isFavSong: false,
    genre: musicGenresMap.regueton,
    artistId: 1
  },
  {
    id: 6,
    songName: 'Bad Romance',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273aeb64471596b00f380975ceb',
    videoURL: 'https://www.youtube.com/watch?v=qrO4YZeyl0I',
    isFavSong: true,
    genre: musicGenresMap.pop,
    artistId: 2
  },
  {
    id: 7,
    songName: 'Judas',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2739ce7475919b19845b22e5208',
    videoURL: 'https://www.youtube.com/watch?v=wagn8Wrmzuc',
    isFavSong: true,
    genre: musicGenresMap.pop,
    artistId: 2
  },
  {
    id: 8,
    songName: 'Poker Face',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d2a19aba02f7aff26536ea25',
    videoURL: 'https://www.youtube.com/watch?v=bESGLojNYSo',
    isFavSong: false,
    genre: musicGenresMap.pop,
    artistId: 2
  },
  {
    id: 9,
    songName: 'Million Reasons',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736382b06979658a68dd868b92',
    videoURL: 'https://www.youtube.com/watch?v=WYRJ-ryPEu0',
    isFavSong: false,
    genre: musicGenresMap.pop,
    artistId: 2
  },
  {
    id: 10,
    songName: 'Alejandro',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27316c0b30e86629c390c113445',
    videoURL: 'https://www.youtube.com/watch?v=niqrrmev4mA',
    isFavSong: false,
    genre: musicGenresMap.pop,
    artistId: 2
  },
  {
    id: 11,
    songName: `I Don't Wanna Miss a Thing`,
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273f039d2a6afcfab0827bb9bc0',
    videoURL: 'https://www.youtube.com/watch?v=JkK8g6FMEXE',
    isFavSong: true,
    genre: musicGenresMap.rock,
    artistId: 3
  },
  {
    id: 12,
    songName: 'Dream On',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273b11078ee23dcd99e085ac33e',
    videoURL: 'https://www.youtube.com/watch?v=89dGC8de0CA',
    isFavSong: true,
    genre: musicGenresMap.rock,
    artistId: 3
  },
  {
    id: 13,
    songName: 'Crazy',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27391b246743456e285a20a46ed',
    videoURL: 'https://www.youtube.com/watch?v=NMNgbISmF4I',
    isFavSong: false,
    genre: musicGenresMap.rock,
    artistId: 3
  },
  {
    id: 14,
    songName: 'Amazing',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736b31fc428270797b96360034',
    videoURL: 'https://www.youtube.com/watch?v=zSmOvYzSeaQ',
    isFavSong: false,
    genre: musicGenresMap.rock,
    artistId: 3
  },
  {
    id: 15,
    songName: 'Rag Doll',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273a8a965df6a845b265ee19106',
    videoURL: 'https://www.youtube.com/watch?v=mrEC8xGc3ZM',
    isFavSong: true,
    genre: musicGenresMap.rock,
    artistId: 3
  },
  {
    id: 16,
    songName: 'Empire State Of Mind',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27390c89f2c0d8cc19558132295',
    videoURL: 'https://www.youtube.com/watch?v=vk6014HuxcE',
    isFavSong: false,
    genre: musicGenresMap.rAndB,
    artistId: 4
  },
  {
    id: 17,
    songName: 'No One',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27373b720e9f078763d33df52e8',
    videoURL: 'https://www.youtube.com/watch?v=rywUS-ohqeE',
    isFavSong: true,
    genre: musicGenresMap.rAndB,
    artistId: 4
  },
  {
    id: 18,
    songName: 'Girl On Fire',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d56795a6058be632e01982e8',
    videoURL: 'https://www.youtube.com/watch?v=J91ti_MpdHA',
    isFavSong: false,
    genre: musicGenresMap.rAndB,
    artistId: 4
  },
  {
    id: 19,
    songName: 'Superwoman',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273c7e7390eb92b5c540ca3d06e',
    videoURL: 'https://www.youtube.com/watch?v=-AphKUK8twg',
    isFavSong: true,
    genre: musicGenresMap.rAndB,
    artistId: 4
  },
  {
    id: 20,
    songName: `Fallin'`,
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736d684b553a40e4a11e1db96d',
    videoURL: 'https://www.youtube.com/watch?v=Urdlvw0SSEc',
    isFavSong: true,
    genre: musicGenresMap.rAndB,
    artistId: 4
  },
  {
    id: 21,
    songName: 'Por un Beso de Tu Boca',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2735c37183a6df48c0b426f966a',
    videoURL: 'https://www.youtube.com/watch?v=HL_NrQsUSsA',
    isFavSong: true,
    genre: musicGenresMap.vallenato,
    artistId: 5
  },
  {
    id: 22,
    songName: 'Ya No Me Duele Mas',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273408b5314c4bcf53dfc51e6a8',
    videoURL: 'https://www.youtube.com/watch?v=BIbonPyTuHQ',
    isFavSong: true,
    genre: musicGenresMap.vallenato,
    artistId: 5
  },
  {
    id: 23,
    songName: 'Materialista',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273ceee4f46d31f91dce77c6f48',
    videoURL: 'https://www.youtube.com/watch?v=94bCNMghYrg',
    isFavSong: true,
    genre: musicGenresMap.vallenato,
    artistId: 5
  },
  {
    id: 24,
    songName: 'Loco Paranoico',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27355c5d0401ed29f01b672eb14',
    videoURL: 'https://www.youtube.com/watch?v=8YmplZWFIMM',
    isFavSong: false,
    genre: musicGenresMap.vallenato,
    artistId: 5
  },
  {
    id: 25,
    songName: 'La Difunta',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273b86046432a91dcc31214f9c7',
    videoURL: 'https://www.youtube.com/watch?v=53ZE7CVRh5I',
    isFavSong: false,
    genre: musicGenresMap.vallenato,
    artistId: 5
  },
  {
    id: 26,
    songName: 'Billie Jean',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2739eb690cb054df293fe7711b8',
    videoURL: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
    isFavSong: true,
    genre: musicGenresMap.pop,
    artistId: 6
  },
  {
    id: 27,
    songName: 'Thriller',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be',
    videoURL: 'https://www.youtube.com/watch?v=sOnqjkJTMaA',
    isFavSong: false,
    genre: musicGenresMap.pop,
    artistId: 6
  },
  {
    id: 28,
    songName: 'Earth Song',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d0593178c6c2594693ee34b7',
    videoURL: 'https://www.youtube.com/watch?v=XAi3VTSdTxU',
    isFavSong: true,
    genre: musicGenresMap.pop,
    artistId: 6
  },
  {
    id: 29,
    songName: 'Remember the Time',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2733b9f8b18cc685e1502128aa8',
    videoURL: 'https://www.youtube.com/watch?v=LeiFF0gvqcc',
    isFavSong: true,
    genre: musicGenresMap.pop,
    artistId: 6
  },
  {
    id: 30,
    songName: 'Smooth Criminal',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2731bb21d27effb96a1d0fe8d6d',
    videoURL: 'https://www.youtube.com/watch?v=h_D3VFfhvs4',
    isFavSong: true,
    genre: musicGenresMap.pop,
    artistId: 6
  },
  {
    id: 31,
    songName: 'GATÚBELA',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273c2e05d426c037a71556c9f14',
    videoURL: 'https://www.youtube.com/watch?v=cU_ndnP4f2s',
    isFavSong: false,
    genre: musicGenresMap.regueton,
    artistId: 7
  },
  {
    id: 32,
    songName: 'X SI VOLVEMOS',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27382de1ca074ae63cb18fce335',
    videoURL: 'https://www.youtube.com/watch?v=VOucMiGOBqg',
    isFavSong: false,
    genre: musicGenresMap.regueton,
    artistId: 7
  },
  {
    id: 33,
    songName: 'QUE CHIMBA DE VIDA',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2738bf08f626df56fffc04b94c6',
    videoURL: 'https://www.youtube.com/watch?v=mL3iLaYbZqk',
    isFavSong: true,
    genre: musicGenresMap.regueton,
    artistId: 7
  },
  {
    id: 34,
    songName: 'BICHOTA',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273ae28c8f2748587cc2a33d6c2',
    videoURL: 'https://www.youtube.com/watch?v=QaXhVryxVBk',
    isFavSong: false,
    genre: musicGenresMap.regueton,
    artistId: 7
  },
  {
    id: 35,
    songName: 'PROVENZA',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273e70c454b8989f09d1e11ea92',
    videoURL: 'https://www.youtube.com/watch?v=ca48oMV59LU',
    isFavSong: true,
    genre: musicGenresMap.regueton,
    artistId: 7
  },
  {
    id: 36,
    songName: 'Nothing Else Matters',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273cf84c5b276431b473e924802',
    videoURL: 'https://www.youtube.com/watch?v=tAGnKpE4NCI',
    isFavSong: true,
    genre: musicGenresMap.rock,
    artistId: 8
  },
  {
    id: 37,
    songName: 'Master Of Puppets',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736976009675621c80cafa1ff5',
    videoURL: 'https://www.youtube.com/watch?v=E0ozmU9cJDg',
    isFavSong: false,
    genre: musicGenresMap.rock,
    artistId: 8
  },
  {
    id: 38,
    songName: 'One',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2737c05e69390ab7c628a83cee7',
    videoURL: 'https://www.youtube.com/watch?v=WM8bTdBs-cw',
    isFavSong: true,
    genre: musicGenresMap.rock,
    artistId: 8
  },
  {
    id: 39,
    songName: 'Whiskey In The Jar',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2737e1f85f69323acac962516c4',
    videoURL: 'https://www.youtube.com/watch?v=wsrvmNtWU4E',
    isFavSong: false,
    genre: musicGenresMap.rock,
    artistId: 8
  },
  {
    id: 40,
    songName: 'The Unforgiven',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273af07dc851962508661bbcfce',
    videoURL: 'https://www.youtube.com/watch?v=domjqjQ_WRI',
    isFavSong: true,
    genre: musicGenresMap.rock,
    artistId: 8
  },
  {
    id: 41,
    songName: 'I Will Always Love You',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273456c0b5d0316a80dc600802e',
    videoURL: 'https://www.youtube.com/watch?v=3JWTaaS7LdU',
    isFavSong: true,
    genre: musicGenresMap.rAndB,
    artistId: 9
  },
  {
    id: 42,
    songName: 'I Have Nothing',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273610c796bc53cec9b9932a269',
    videoURL: 'https://www.youtube.com/watch?v=FxYw0XPEoKE',
    isFavSong: true,
    genre: musicGenresMap.rAndB,
    artistId: 9
  },
  {
    id: 43,
    songName: 'I Wanna Dance With Somebody',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d00001e02cc57e9b00b87dd0f6e868347',
    videoURL: 'https://www.youtube.com/watch?v=eH3giaIzONA',
    isFavSong: true,
    genre: musicGenresMap.rAndB,
    artistId: 9
  },
  {
    id: 44,
    songName: 'Greatest Love Of All',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2732ae4fcec560ab559d6f5dc88',
    videoURL: 'https://www.youtube.com/watch?v=IYzlVDlE72w',
    isFavSong: false,
    genre: musicGenresMap.rAndB,
    artistId: 9
  },
  {
    id: 45,
    songName: 'Higher Love',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2737c8977a0ad3a3a0627be9ed7',
    videoURL: 'https://www.youtube.com/watch?v=JR49dyo-y0E',
    isFavSong: false,
    genre: musicGenresMap.rAndB,
    artistId: 9
  },
  {
    id: 46,
    songName: 'Olvídala',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d0b8c555dc3c3fe62f8828da',
    videoURL: 'https://www.youtube.com/watch?v=1iAlioW6WAc',
    isFavSong: true,
    genre: musicGenresMap.vallenato,
    artistId: 10
  },
  {
    id: 47,
    songName: 'Si Tu Amor No Vuelve',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2731f9f0f264bc5838f14ab3a53',
    videoURL: 'https://www.youtube.com/watch?v=Tt-tuAV_9Ss',
    isFavSong: true,
    genre: musicGenresMap.vallenato,
    artistId: 10
  },
  {
    id: 48,
    songName: 'Niña Bonita',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273fc9ab177e9974caadea115aa',
    videoURL: 'https://www.youtube.com/watch?v=DR6ED6lvkb4',
    isFavSong: false,
    genre: musicGenresMap.vallenato,
    artistId: 10
  },
  {
    id: 49,
    songName: 'Hoy Me Di Cuenta',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27308591053b40f1d20c6bda092',
    videoURL: 'https://www.youtube.com/watch?v=HyHV7jKW_Rs',
    isFavSong: false,
    genre: musicGenresMap.vallenato,
    artistId: 10
  },
  {
    id: 50,
    songName: 'Me Vas A Extrañar',
    songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2732af4131d078164efa68465d9',
    videoURL: 'https://www.youtube.com/watch?v=cpPffQMHNEs',
    isFavSong: false,
    genre: musicGenresMap.vallenato,
    artistId: 10
  }
];

export const PLAYLISTS = [
  {
    id: 1,
    playlistName: 'Mix',
    playlistPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2730d4e3d8e124aa7c39d5efa79',
    playlistSongs: [1, 20, 30, 40, 50]
  },
  {
    id: 2,
    playlistName: 'R&B Essentials',
    playlistPhotoURL: 'https://i.scdn.co/image/ab67616d00001e02c219ac2e679a030f2d8a5026',
    playlistSongs: [17, 19, 43, 44, 45]
  },
  {
    id: 3,
    playlistName: 'Rock Essentials',
    playlistPhotoURL: 'https://i.scdn.co/image/ab67616d00001e0235eeb40f2fa70b35d9c48ece',
    playlistSongs: [13, 36, 14, 40, 15]
  },
  {
    id: 4,
    playlistName: 'Regueton Party',
    playlistPhotoURL: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845026f2c406bea5aad263913e',
    playlistSongs: [31, 32, 3, 4, 35]
  },
  {
    id: 5,
    playlistName: 'Vallenato Love',
    playlistPhotoURL: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c1785590948dff132e5d6888',
    playlistSongs: [21, 46, 47, 22, 23]
  }
];

export function filterByMusicGenre(genre) {
  return SONGS
    .filter(song => song.genre === genre)
    .map(song => {
      const artist = ARTISTS.find(artist => artist.id === song.artistId);
      return {
        songName: song.songName,
        artist: artist.artistName,
        songPhotoURL: song.songPhotoURL,
        videoURL: song.videoURL,
        isFavSong: song.isFavSong
      }
    });
}

export function filterByArtist(artistName) {
  const artist = ARTISTS.find(artist => artist.artistName === artistName);
  if (!artist) { return [] }

  return SONGS
    .filter(song => song.artistId === artist.id)
    .map(song => song.songName);
}

export const convertToEmbedURL = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0]; // Extrae el video ID
  return `https://www.youtube.com/embed/${videoId}`;
};