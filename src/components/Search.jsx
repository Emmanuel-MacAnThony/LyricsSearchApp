import React from "react";
import { useState, useContext } from "react";
import { Context } from "../context/LyricsContext";
import { searchTracks } from "../services/trackService";

const Search = () => {
  const context = useContext(Context);
  const [trackTitle, setTrackTitle] = useState("");

  const onChange = (e) => {
    setTrackTitle(e.target.value);
  };

  const findTrack = async (e) => {
    const { dispatch } = context;
    e.preventDefault();
    try {
      const response = await searchTracks(trackTitle);
      dispatch({
        type: "SEARCH_TRACKS",
        payload: response.data.message.body.track_list,
      });
      setTrackTitle("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fa fa-music"></i> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song Title..."
            name="trackTitle"
            value={trackTitle}
            onChange={onChange}
          />
        </div>
        <button
          className="btn btn-primary btn-lg btn-block my-3"
          style={{ width: "100%" }}
          type="submit"
        >
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
};

export default Search;
