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
  <section class="my-4 mx-3">
    <h5>FILM</h5>
    <div class="d-flex">
      <AppFilmCard v-for="movie in store.movies" :info="movie" />
    </div>
  </section>
  <section class="mx-3">
    <h5>SERIE TV</h5>
    <div class="d-flex">
      <AppFilmCard v-for="serie in store.tv" :info="serie" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
h5 {
  color: white;
}
</style>
