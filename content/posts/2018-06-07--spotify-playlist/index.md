---
title: Un playslist de Spotify
subTitle: un poco música
category: "sayings"
cover: mark-solarski-183866-unsplash-web-cover.jpg
---

Spotify tiene una fución de que cada semana hace un Playlist personalizado, es bastante bueno tanto así que suelo descargarlo en mi iPhone

import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

<SpotifyPlayer
  uri="spotify:user:spotify:playlist:37i9dQZEVXcNbaAx5HZ7Qa"
  size={size}
  view={view}
  theme={theme}
/>


![unsplash.com](./mark-solarski-183866-unsplash-web.jpg)
