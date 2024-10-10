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

const musicGenresMap = {
  rAndB: 'R&B',
  rock: 'Rock',
  regueton: 'Regueton',
  pop: 'Pop',
  vallenato: 'Vallenato'
}

export const SONGS_BY_ARTIST = [
  {
    id: 1,
    artistName: 'Feid',
    photoURL: 'https://i.scdn.co/image/ab67616100005174e82c62cc8cf019aecfd71ee8',
    genre: musicGenresMap.regueton,
    songs: [
      {
        songName: 'LUNA',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242',
        videoURL: 'https://www.youtube.com/watch?v=ZA7ZKB8Mo9k'
      },
      {
        songName: 'SE ME OLVIDA',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273edd9fbb8df345ace64a558d7',
        videoURL: 'https://www.youtube.com/watch?v=ROgcM9-N9jM'
      },
      {
        songName: 'PERRO NEGRO',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d00001e027cc7b0d6a82846cd8b158f99',
        videoURL: 'https://www.youtube.com/watch?v=a6tgD_CsYTQ'
      },
      {
        songName: 'SORRY 4 THAT MUCH',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273746cdeef8d4a4110f1b5af29',
        videoURL: 'https://www.youtube.com/watch?v=Q2ftMmazZCU'
      },
      {
        songName: 'HABLAME CLARO',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273aac05e76abbf5a43d5705766',
        videoURL: 'https://www.youtube.com/watch?v=wPGn8iqoyGY'
      }
    ]
  },
  {
    id: 2,
    artistName: 'Lady Gaga',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b2738093238ec0c71ef7c95c8fb1',
    genre: musicGenresMap.pop,
    songs: [
      {
        songName: 'Bad Romance',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273aeb64471596b00f380975ceb',
        videoURL: 'https://www.youtube.com/watch?v=qrO4YZeyl0I'
      },
      {
        songName: 'Judas',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2739ce7475919b19845b22e5208',
        videoURL: 'https://www.youtube.com/watch?v=wagn8Wrmzuc'
      },
      {
        songName: 'Poker Face',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d2a19aba02f7aff26536ea25',
        videoURL: 'https://www.youtube.com/watch?v=bESGLojNYSo'
      },
      {
        songName: 'Million Reasons',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736382b06979658a68dd868b92',
        videoURL: 'https://www.youtube.com/watch?v=WYRJ-ryPEu0'
      },
      {
        songName: 'Alejandro',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27316c0b30e86629c390c113445',
        videoURL: 'https://www.youtube.com/watch?v=niqrrmev4mA'
      }
    ]
  },
  {
    id: 3,
    artistName: 'Aerosmith',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b273a7af122cd50575f63a156586',
    genre: musicGenresMap.rock,
    songs: [
      {
        songName: `I Don't Wanna Miss a Thing`,
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273f039d2a6afcfab0827bb9bc0',
        videoURL: 'https://www.youtube.com/watch?v=JkK8g6FMEXE'
      },
      {
        songName: 'Dream On',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273b11078ee23dcd99e085ac33e',
        videoURL: 'https://www.youtube.com/watch?v=89dGC8de0CA'
      },
      {
        songName: 'Crazy',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27391b246743456e285a20a46ed',
        videoURL: 'https://www.youtube.com/watch?v=NMNgbISmF4I'
      },
      {
        songName: 'Amazing',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736b31fc428270797b96360034',
        videoURL: 'https://www.youtube.com/watch?v=zSmOvYzSeaQ'
      },
      {
        songName: 'Rag Doll',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273a8a965df6a845b265ee19106',
        videoURL: 'https://www.youtube.com/watch?v=mrEC8xGc3ZM'
      }
    ]
  },
  {
    id: 4,
    artistName: 'Alicia Keys',
    photoURL: 'https://i.scdn.co/image/ab67616d00001e02a210590ab32a6d17777b0bf9',
    genre: musicGenresMap.rAndB,
    songs: [
      {
        songName: 'Empire State Of Mind',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27390c89f2c0d8cc19558132295',
        videoURL: 'https://www.youtube.com/watch?v=vk6014HuxcE'
      },
      {
        songName: 'No One',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27373b720e9f078763d33df52e8',
        videoURL: 'https://www.youtube.com/watch?v=rywUS-ohqeE'
      },
      {
        songName: 'Girl On Fire',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d56795a6058be632e01982e8',
        videoURL: 'https://www.youtube.com/watch?v=J91ti_MpdHA'
      },
      {
        songName: 'Superwoman',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273c7e7390eb92b5c540ca3d06e',
        videoURL: 'https://www.youtube.com/watch?v=-AphKUK8twg'
      },
      {
        songName: `Fallin'`,
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736d684b553a40e4a11e1db96d',
        videoURL: 'https://www.youtube.com/watch?v=Urdlvw0SSEc'
      }
    ]
  },
  {
    id: 5,
    artistName: 'Silvestre Dangond',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b273354859da6a81577724fa0a2f',
    genre: musicGenresMap.vallenato,
    songs: [
      {
        songName: 'Por un Beso de Tu Boca',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2735c37183a6df48c0b426f966a',
        videoURL: 'https://www.youtube.com/watch?v=HL_NrQsUSsA'
      },
      {
        songName: 'Ya No Me Duele Mas',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273408b5314c4bcf53dfc51e6a8',
        videoURL: 'https://www.youtube.com/watch?v=BIbonPyTuHQ'
      },
      {
        songName: 'Materialista',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273ceee4f46d31f91dce77c6f48',
        videoURL: 'https://www.youtube.com/watch?v=94bCNMghYrg'
      },
      {
        songName: 'Loco Paranoico',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27355c5d0401ed29f01b672eb14',
        videoURL: 'https://www.youtube.com/watch?v=8YmplZWFIMM'
      },
      {
        songName: 'La Difunta',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273b86046432a91dcc31214f9c7',
        videoURL: 'https://www.youtube.com/watch?v=53ZE7CVRh5I'
      }
    ]
  },
  {
    id: 6,
    artistName: 'Michael Jackson',
    photoURL: 'https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97',
    genre: musicGenresMap.pop,
    songs: [
      {
        songName: 'Billie Jean',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2739eb690cb054df293fe7711b8',
        videoURL: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y'
      },
      {
        songName: 'Thriller',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be',
        videoURL: 'https://www.youtube.com/watch?v=sOnqjkJTMaA'
      },
      {
        songName: 'Earth Song',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d0593178c6c2594693ee34b7',
        videoURL: 'https://www.youtube.com/watch?v=XAi3VTSdTxU'
      },
      {
        songName: 'Remember the Time',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2733b9f8b18cc685e1502128aa8',
        videoURL: 'https://www.youtube.com/watch?v=LeiFF0gvqcc'
      },
      {
        songName: 'Smooth Criminal',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2731bb21d27effb96a1d0fe8d6d',
        videoURL: 'https://www.youtube.com/watch?v=h_D3VFfhvs4'
      }
    ]
  },
  {
    id: 7,
    artistName: 'Karol G',
    photoURL: 'https://i.scdn.co/image/ab6761610000e5eb4b0754aefc9db490e02205ec',
    genre: musicGenresMap.regueton,
    songs: [
      {
        songName: 'GATÚBELA',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273c2e05d426c037a71556c9f14',
        videoURL: 'https://www.youtube.com/watch?v=cU_ndnP4f2s'
      },
      {
        songName: 'X SI VOLVEMOS',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27382de1ca074ae63cb18fce335',
        videoURL: 'https://www.youtube.com/watch?v=VOucMiGOBqg'
      },
      {
        songName: 'QUE CHIMBA DE VIDA',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2738bf08f626df56fffc04b94c6',
        videoURL: 'https://www.youtube.com/watch?v=mL3iLaYbZqk'
      },
      {
        songName: 'BICHOTA',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273ae28c8f2748587cc2a33d6c2',
        videoURL: 'https://www.youtube.com/watch?v=QaXhVryxVBk'
      },
      {
        songName: 'PROVENZA',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273e70c454b8989f09d1e11ea92',
        videoURL: 'https://www.youtube.com/watch?v=ca48oMV59LU'
      }
    ]
  },
  {
    id: 8,
    artistName: 'Metallica',
    photoURL: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1sJmec-default.jpg',
    genre: musicGenresMap.rock,
    songs: [
      {
        songName: 'Nothing Else Matters',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273cf84c5b276431b473e924802',
        videoURL: 'https://www.youtube.com/watch?v=tAGnKpE4NCI'
      },
      {
        songName: 'Master Of Puppets',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2736976009675621c80cafa1ff5',
        videoURL: 'https://www.youtube.com/watch?v=E0ozmU9cJDg'
      },
      {
        songName: 'One',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2737c05e69390ab7c628a83cee7',
        videoURL: 'https://www.youtube.com/watch?v=WM8bTdBs-cw'
      },
      {
        songName: 'Whiskey In The Jar',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2737e1f85f69323acac962516c4',
        videoURL: 'https://www.youtube.com/watch?v=wsrvmNtWU4E'
      },
      {
        songName: 'The Unforgiven',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273af07dc851962508661bbcfce',
        videoURL: 'https://www.youtube.com/watch?v=domjqjQ_WRI'
      }
    ]
  },
  {
    id: 9,
    artistName: 'Whitney Houston',
    photoURL: 'src="https://i.scdn.co/image/ab6761610000e5ebcd9f60ab57585bf3b77ecc51"',
    genre: musicGenresMap.rAndB,
    songs: [
      {
        songName: 'I Will Always Love You',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273456c0b5d0316a80dc600802e',
        videoURL: 'https://www.youtube.com/watch?v=3JWTaaS7LdU'
      },
      {
        songName: 'I Have Nothing',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273610c796bc53cec9b9932a269',
        videoURL: 'https://www.youtube.com/watch?v=FxYw0XPEoKE'
      },
      {
        songName: 'I Wanna Dance With Somebody',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d00001e02cc57e9b00b87dd0f6e868347',
        videoURL: 'https://www.youtube.com/watch?v=eH3giaIzONA'
      },
      {
        songName: 'Greatest Love Of All',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2732ae4fcec560ab559d6f5dc88',
        videoURL: 'https://www.youtube.com/watch?v=IYzlVDlE72w'
      },
      {
        songName: 'Higher Love',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2737c8977a0ad3a3a0627be9ed7',
        videoURL: 'https://www.youtube.com/watch?v=JR49dyo-y0E'
      }
    ]
  },
  {
    id: 10,
    artistName: 'Binomio de Oro',
    photoURL: 'https://i.scdn.co/image/ab6761610000e5eb813e7b32f71bf7229db29e1b',
    genre: musicGenresMap.vallenato,
    songs: [
      {
        songName: 'Olvídala',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273d0b8c555dc3c3fe62f8828da',
        videoURL: 'https://www.youtube.com/watch?v=1iAlioW6WAc'
      },
      {
        songName: 'Si Tu Amor No Vuelve',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2731f9f0f264bc5838f14ab3a53',
        videoURL: 'https://www.youtube.com/watch?v=Tt-tuAV_9Ss'
      },
      {
        songName: 'Niña Bonita',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b273fc9ab177e9974caadea115aa',
        videoURL: 'https://www.youtube.com/watch?v=DR6ED6lvkb4'
      },
      {
        songName: 'Hoy Me Di Cuenta',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b27308591053b40f1d20c6bda092',
        videoURL: 'https://www.youtube.com/watch?v=HyHV7jKW_Rs'
      },
      {
        songName: 'Me Vas A Extrañar',
        songPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2732af4131d078164efa68465d9',
        videoURL: 'https://www.youtube.com/watch?v=cpPffQMHNEs'
      }
    ]
  }
];

export const PLAYLISTS = [
  {
    playlistName: 'Mix',
    playlistPhotoURL: 'https://i.scdn.co/image/ab67616d0000b2730d4e3d8e124aa7c39d5efa79',
    playlistSongs: [
      SONGS_BY_ARTIST[0].songs[0],
      SONGS_BY_ARTIST[1].songs[0],
      SONGS_BY_ARTIST[2].songs[0],
      SONGS_BY_ARTIST[3].songs[0],
      SONGS_BY_ARTIST[4].songs[0],
    ]
  },
  {
    playlistName: 'R&B Essentials',
    playlistPhotoURL: 'https://i.scdn.co/image/ab67616d00001e02c219ac2e679a030f2d8a5026',
    playlistSongs: [
      SONGS_BY_ARTIST[3].songs[2],
      SONGS_BY_ARTIST[3].songs[4],
      SONGS_BY_ARTIST[8].songs[1],
      SONGS_BY_ARTIST[8].songs[0],
      SONGS_BY_ARTIST[3].songs[3],
    ]
  },
  {
    playlistName: 'Rock Essentials',
    playlistPhotoURL: 'https://i.scdn.co/image/ab67616d00001e0235eeb40f2fa70b35d9c48ece',
    playlistSongs: [
      SONGS_BY_ARTIST[2].songs[2],
      SONGS_BY_ARTIST[7].songs[4],
      SONGS_BY_ARTIST[7].songs[1],
      SONGS_BY_ARTIST[2].songs[0],
      SONGS_BY_ARTIST[2].songs[3],
    ]
  },
  {
    playlistName: 'Regueton Party',
    playlistPhotoURL: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845026f2c406bea5aad263913e',
    playlistSongs: [
      SONGS_BY_ARTIST[0].songs[2],
      SONGS_BY_ARTIST[6].songs[4],
      SONGS_BY_ARTIST[6].songs[1],
      SONGS_BY_ARTIST[6].songs[0],
      SONGS_BY_ARTIST[0].songs[3],
    ]
  },
  {
    playlistName: 'Vallenato Love',
    playlistPhotoURL: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c1785590948dff132e5d6888',
    playlistSongs: [
      SONGS_BY_ARTIST[4].songs[2],
      SONGS_BY_ARTIST[9].songs[4],
      SONGS_BY_ARTIST[4].songs[1],
      SONGS_BY_ARTIST[6].songs[0],
      SONGS_BY_ARTIST[9].songs[3],
    ]
  },
]