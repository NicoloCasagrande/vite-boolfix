<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store";
import axios from "axios";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchAll() {
      if (this.store.searchFilm === true && this.store.searchTv === true) {
        this.searchTv();
        this.searchFilm();
      } else if (
        this.store.searchTv === false &&
        this.store.searchFilm === true
      ) {
        this.searchFilm();
      } else if (
        this.store.searchTv === true &&
        this.store.searchFilm === false
      ) {
        this.searchTv();
      }
    },
    searchFilm() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "07842e63ff3345bef69488c328add8f4",
            query: this.store.searchText,
            lannguage: "it-IT",
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
          console.log(resp.data.results);
          console.log("cerco Film");
        });
    },
    searchTv() {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "07842e63ff3345bef69488c328add8f4",
            query: this.store.searchText,
            lannguage: "it-IT",
          },
        })
        .then((resp) => {
          this.store.tv = resp.data.results;
          console.log(resp.data.results);
          console.log("cerco Tv");
        });
    },
  },
};
</script>

<template>
  <div></div>
  <AppHeader @search="searchAll" />
  <section>
    <h2>FILM</h2>
    <div v-for="movie in store.movies">
      <h4>{{ movie.title }}</h4>
    </div>
  </section>
  <section>
    <h2>SERIE TV</h2>
    <div v-for="serie in store.tv">
      <h4>{{ serie.name }}</h4>
    </div>
  </section>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
