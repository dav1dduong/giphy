import axios from "axios";
import { GiphyResponse } from "../models/GiphyResponse";
import SingleGifResponse from "../models/SingleGifResponse";

const apiKey: string = import.meta.env.VITE_API_KEY || "API KEY NOT FOUN";
export const getTrendingGifs = async (): Promise<GiphyResponse> => {
  // option 1  async await
  //return().data;
  //option 2 .then() method
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: { api_key: apiKey },
      headers: { Accept: "application/json" },
    })
    .then((res) => {
      return res.data;
    });
};
export const getSearchTermGifs = async (
  searchTerm: string
): Promise<GiphyResponse> => {
  // option 1  async await
  //return().data;
  //option 2 .then() method
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: apiKey, q: searchTerm },
      headers: { Accept: "application/json" },
    })
    .then((res) => {
      return res.data;
    });
};

export const getGifById = (id: string): Promise<SingleGifResponse> => {
  // opt1: async await
  // opt 2: .then
  return axios
    .get(`https://api.giphy.com/v1/gifs/${id}`, {
      params: { api_key: apiKey },
    })
    .then((res) => res.data);
};
