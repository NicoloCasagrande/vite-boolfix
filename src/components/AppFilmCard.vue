<script>
import { store } from "../store";
export default {
  name: "AppFilmCard",
  data() {
    return {
      store,
      props: {
        info: Object,
      },
    };
  },
};
</script>

<template>
  <div>
    <img
      :src="`https://image.tmdb.org/t/p/w500${info.poster_path}`"
      :alt="info.title || info.name"
    />
  </div>
</template>

<style lang="scss" scoped></style>
