import axios from "axios";

const baseUrl = import.meta.env.VITE_UNSPLASH_BASE_URL;
const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

const searchPhotos = async (word: string) => {
  return axios
    .get(`${baseUrl}/search/photos?query=cat&client_id=${clientId}`)
    .then((res) => {
      return res;
    });
};

export { searchPhotos };
