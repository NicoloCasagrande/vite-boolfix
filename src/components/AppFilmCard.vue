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
    <div class="img-div">
      <img
        :src="`https://image.tmdb.org/t/p/w500${info?.poster_path}`"
        alt=""
      />
      <div class="info-display">
        <div class="d-flex flex-column justify-content-center">
          <span> Titolo: {{ info.title || info.name }}</span>
          <span
            >Titolo originale:
            {{ info.original_title || info.original_name }}</span
          >
          <span>Voto: {{ info.vote_average }}</span>
          <span>Overview: {{ info.overview }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-div {
  width: 15.625rem;
  position: relative;
}
.info-display {
  display: none;
  position: absolute;
  top: 0;
  width: 15.625rem;
  height: 100%;
  background-color: black;
  border: 1px solid gray;
  color: white;
  &:hover {
    display: block;
  }
}
img {
  width: 15.625rem;
  height: auto;
}
</style>
