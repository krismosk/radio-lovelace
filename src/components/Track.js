import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/

// Track is parsing out the data from the JSON file (sort of)
// its basically parsing out an indivudal track element
// and its assigning a varialbe at the outset that points to the objects attribute

// returning a list item for the individual track and its individual elements/buttons
class Track extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${this.props.title}`} src={this.props.albumart} />
        <h3 className="track--title">{this.props.title}</h3>
        <input
          type="checkbox"
          className="track--favorite"
          checked={this.props.favorite}
        />
        <p className="track--artist">{this.props.artist}</p>
        <p className="track--playtime">{this.props.playtime}</p>
        {/* button to send track to the top */}
        <button
          className="track--control track--to-top"
          >
          <span role="img" aria-label="send to top">🔝</span>
        </button>
        <button
          className="track--control track--switch"
          >
          <span role="img" aria-label="switch lists">↔</span>
        </button>
      </li>
    );
  }
}










// const Track = ({title, artist, playtime, albumart, favorite}) => {
//   return (
//     <li className="track">
//       <img className="track--albumart" alt={`album art for ${title}`} src={albumart} />
//       <h3 className="track--title">{title}</h3>
//       <input
//         type="checkbox"
//         className="track--favorite"
//         checked={favorite}
//       />
//       <p className="track--artist">{artist}</p>
//       <p className="track--playtime">{playtime}</p>
//       {/* button to send track to the top */}
//       <button
//         className="track--control track--to-top"
//         >
//         <span role="img" aria-label="send to top">🔝</span>
//       </button>
//       <button
//         className="track--control track--switch"
//         >
//         <span role="img" aria-label="switch lists">↔</span>
//       </button>
//     </li>
//   );
// };

// defining proptypes 
Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
