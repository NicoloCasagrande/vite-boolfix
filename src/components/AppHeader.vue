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
  <div class="d-flex">
    <form action="#" @submit="$emit('search')">
      <input
        type="text"
        v-model="store.searchText"
        placeholder="Inizia la tua ricerca"
      />
      <button type="submit">Cerca</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
