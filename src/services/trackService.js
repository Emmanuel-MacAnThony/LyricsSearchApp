import http from "./httpService";
import config from "../config.json";

export function getTracks() {
  const apiEndPoint =
    "chart.tracks.get?chart_name=top&page=1&page_size=10&country=ng&f_has_lyrics=1";
  return http.get(
    `https://cors-anywhere.herokuapp.com/${config.apiUrl}${apiEndPoint}&apikey=${config.apiKey}`
  );
}

export function searchTracks(trackTitle) {
  const apiEndPoint = `track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc`;
  return http.get(
    `https://cors-anywhere.herokuapp.com/${config.apiUrl}${apiEndPoint}&apikey=${config.apiKey}`
  );
}

export function getLyrics(id) {
  const apiEndPoint = `track.lyrics.get?track_id=${id}`;
  return http.get(
    `https://cors-anywhere.herokuapp.com/${config.apiUrl}${apiEndPoint}&apikey=${config.apiKey}`
  );
}

export function getTrackData(id) {
  const apiEndPoint = `track.get?track_id=${id}`;
  return http.get(
    `https://cors-anywhere.herokuapp.com/${config.apiUrl}${apiEndPoint}&apikey=${config.apiKey}`
  );
}
