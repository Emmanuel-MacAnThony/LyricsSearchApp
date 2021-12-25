import React from "react";
import { getTracks } from "../services/trackService";

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        tracks: { ...state.tracks, track_list: action.payload },
        heading: "Search Results",
      };
    default:
      return state;
  }
};

export class LyricsContext extends React.Component {
  state = {
    tracks: { track_list: [], isLoading: true },
    heading: "Top Ten Tracks",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  async componentDidMount() {
    try {
      const response = await getTracks();
      console.log(response.data);
      const tracks = {
        track_list: response.data.message.body.track_list,
        isLoading: false,
      };
      this.setState({ tracks });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
