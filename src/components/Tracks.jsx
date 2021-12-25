import React, { useContext } from "react";
import { Context } from "./../context/LyricsContext";
import Spinner from "./Spinner";
import Track from "./Track";

const Tracks = (props) => {
  const context = useContext(Context);
  const { isLoading: loading, track_list: tracks } = context.tracks;
  const { heading } = context;

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {tracks.map((item) => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Tracks;
