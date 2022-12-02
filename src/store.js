import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  searchText: "",
  movies: [],
  tv: [],
  searchTv: true,
  searchFilm: true,
});
