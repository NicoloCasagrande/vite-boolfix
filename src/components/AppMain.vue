<script>
import { store } from "../store";
import AppFilmCard from "./AppFilmCard.vue";
export default {
  name: "AppMain",
  data() {
    return {
      store,
    };
  },
  components: {
    AppFilmCard,
  },
};
</script>

<template>
  <section>
    <h2>FILM</h2>
    <div class="d-flex">
      <AppFilmCard v-for="movie in store.movies" :info="movie" />
    </div>
  </section>
  <section>
    <h2>SERIE TV</h2>
    <div class="d-flex">
      <AppFilmCard v-for="serie in store.tv" :info="serie" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
h2 {
  color: white;
}
</style>
