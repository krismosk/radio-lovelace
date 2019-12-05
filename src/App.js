import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

// iterating through songData CSV and assigning a auto-incremented id for each song
songData.forEach((song, i) => {
  song.id = i;
});

// App is creating an new variable tracks and setting it equal to CSV songData
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} />
        </main>
      </div>
    );
  }
}

export default App;
