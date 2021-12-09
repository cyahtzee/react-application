import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media0.giphy.com/media/l0K4puBUN4w6G4ksE/200w.GIF";
    return (
      <img src={src} alt="gif" />
    );
  }
}

export default Gif;
