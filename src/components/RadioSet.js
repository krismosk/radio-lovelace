import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  // creates an object Playlists, with two attributes (morningTrack, eveningTrack)
  // each attribute accesses songData (via props.tracks)
  // morningTracks takes the first half of the data
  // eveningTracks takes the second half of the data
  const playlists = {
    // beginning to middle split
    morningTracks: props.tracks.slice(0, props.tracks.length / 2),
    // middle to end split
    eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  };

  // Returning two nested Playlist components, creating a new 
  // variable called side, one is set to morning and the other evening
  // **unclear as to whether tracks is a new var independant
  // of the one defined in App

  // playlists.morningTracks => accessing the object called playlists
  // and it's attribute called morningTracks 
  // same goes for eveningTracks
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={playlists.morningTracks}
        />
        <Playlist
          side="Evening"
          tracks={playlists.eveningTracks}
        />
      </section>
    </div>
  );
};

export default RadioSet;