import axios, { AxiosError, AxiosResponse } from "axios";
import searchPhotosResult from "./searchPhotosResult.json";

type SearchPhotosResult = typeof searchPhotosResult;

const baseUrl = import.meta.env.VITE_UNSPLASH_BASE_URL;
const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

const searchPhotos = async (word: string, page: number) => {
  return axios
    .get(
      `${baseUrl}/search/photos?query=${word}&page=${page}&client_id=${clientId}`
    )
    .then((res: AxiosResponse<SearchPhotosResult>) => {
      return res;
    })
    .catch((e: AxiosError<{ error: string }>) => {
      console.error(e.message);
    });
};

export { searchPhotos };
