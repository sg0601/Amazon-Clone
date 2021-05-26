import axios from "axios";
// create an axios object
const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-e09d2.cloudfunctions.net/api'
});

export default instance;
// http://localhost:5004/clone-e09d2/us-central1/api