import axios from "axios";
import { SelectorsType } from "../pages/HomePage/types";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const endpoints = {
  getCharactersByData: ({ name, status, gender, page }: SelectorsType) =>
    `/character?page=${page || 1}
    ${name ? `&name=${name}` : ""}
    ${status ? `&status=${status}` : ""}
    ${gender ? `&gender=${gender}` : ""}`,
};
