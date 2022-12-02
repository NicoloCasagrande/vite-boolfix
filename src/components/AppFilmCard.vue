<script>
import { store } from "../store";
export default {
  name: "AppFilmCard",
  props: {
    info: Object,
  },
  data() {
    return {
      store,
      type: "",
    };
  },
  methods: {
    case() {
      return console.log(this.props.info);
    },
  },
};
</script>

<template>
  <div>
    <div class="img-div"></div>
    <img :src="`https://image.tmdb.org/t/p/w500${info?.poster_path}`" alt="" />
    <span>{{ info.name || info.title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.img-div {
  width: 18.75rem;
}
img {
  width: 18.75rem;
  height: auto;
}
</style>
