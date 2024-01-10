<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
   methods: {
    getCardList() {
      axios.get(store.endpoint).then((response) => {
        this.store.cardList = response.data.data
      })
    }
  },
  created() {
    this.getCardList();
  },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/generals.scss' as *;
</style>