import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Spinner from "./components/Spinner";
import { getLyrics, getTrackData } from "./services/trackService";

const Lyrics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const { id: lyricsId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        let response = await getLyrics(lyricsId);
        setLyrics(response.data.message.body.lyrics);
        response = await getTrackData(lyricsId);
        setTrack(response.data.message.body.track);
      } catch (error) {}
    }
    getData();
  }, []);

  useEffect(() => {
    if (Object.keys(track).length === 0 || Object.keys(lyrics).length === 0)
      setIsLoading(true);
    else {
      setIsLoading(false);
    }
    console.log(track);
  }, [track, lyrics]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary"> {track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{" "}
              <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
            </li>
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default Lyrics;
