<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1>BOOLFIX</h1>
    <form action="#" @submit="$emit('search')">
      <input
        type="text"
        v-model="store.searchText"
        placeholder="Inizia la tua ricerca"
      />
      <button class="mx-2" type="submit">Cerca</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: black;
}
h1 {
  color: red;
}
button {
  border: none;
  background-color: transparent;
  color: white;
}
</style>
