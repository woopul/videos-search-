import axios from 'axios';

const KEY = "AIzaSyCdKvNU2uoSXRNzEBD1mDfrPtLJ1EceP-Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: KEY,
  }
});