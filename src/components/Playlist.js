import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

// PURPOSE: calculating total playtime per playlist
// creating a function that takes in tracks
// and iterates thru them, accessing the .playtime
// attribute, splitting by semi-colon
// assigning minutes to the first element
// assinging seconds to the second element
const calculatePlayTime = (tracks) => {
  let minutes = 0;
  let seconds = 0;
  tracks.forEach((track) => {
    const times = track.playtime.split(':');
    minutes += parseInt(times[0]);
    seconds += parseInt(times[1]);
  });

  minutes += Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  seconds = ("" + seconds).padStart(2, "0");
  minutes = ("" + minutes).padStart(2, "0");
  // returns a total playlist run time to be used at the top of
  // each morning/evening playlist view
  return `${hours}:${minutes}:${seconds}`;
}


// PLAYLIST COMPONENT
// passing in props which are parsed tracks for morning and evening 
const Playlist = (props) => {
  // allows you to access the tracks passed in as a prop from 
  // radioset
  const tracks = props.tracks;
  // creating a new var to show the full count of tracks per 
  // playlist
  const trackCount = tracks.length;
  // calls the method defined above that calculates
  // total track play time per playlist
  const playtime = calculatePlayTime(tracks);
  const trackElements = tracks.map((track, i) => {
    // We use "spread syntax" here to pass in all the properties of 
    // the variable 'track' as props. Go look it up!

    // returns a individual track component
    // with the tracks id
    // and all the attributes within track

    // in the browser we see each each indivudal track compo. being
    // rendered on the page
    // whereas playlist is just the entire collection of tracks
    // track is just showing one indiv track with its info and buttons
    return (
      <Track
        key={track.id}
        {...track}
      />
    );
  });
  // component returns a section of HTML
  // that will show the morning and evening playlist name
  // the full track count by calling the var name
  // the track elements have the image, song title, artisit
  // duration, different buttons, etc


  // trackElements is a function that is returning
  // a track COMPONENT within in, so when it's being called
  // its actually rendering all the elements of the track
  return (
    <div className="playlist">
      <h2>{props.side} Playlist</h2>
      <p>
        {trackCount} tracks - {playtime}
      </p>
      <ul className="playlist--track-list">
        {trackElements}
      </ul>
    </div>
  );
}


// defining proptypes for documentation
Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
}

export default Playlist;
