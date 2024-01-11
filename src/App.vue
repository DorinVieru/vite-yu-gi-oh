<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import axios from 'axios'

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppLoader from './components/AppLoader.vue'
import AppSearch from './components/AppSearch.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
    AppLoader,
    AppSearch,
  },
  data() {
    return {
      store
    }
  },
   methods: {
    getCardList() {
      let url = store.endpoint;
      if (store.selectArchetype != '') {
        url += `&archetype=${store.selectArchetype}`
      }
      axios.get(url).then(response => {
        store.loading = true;
        store.cardList = response.data.data
        store.loading = false;
      })
    },
     resetSelectArchetype() {
      store.selectArchetype = '';
      axios.get(store.endpoint).then(response => {
        store.loading = true;
        store.cardList = response.data.data
        store.loading = false;
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
    <!-- LOADING PRIMA DEL CARICAMENTO DELLA PAGINA -->
    <AppLoader v-if="store.loading" />
    <div v-else>

      <!-- HEADER -->
      <AppHeader />

      <!-- RICERCA -->
      <AppSearch @filter="getCardList" @reset_select="resetSelectArchetype"/>
      
      <!-- MAIN -->
      <AppMain />
    </div>
  </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/generals.scss' as *;
</style>