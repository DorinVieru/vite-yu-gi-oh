<!-- SEZIONE JS SCRIPT -->
<script>

// IMPORTO LE COMPONTENTI
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppHeader,
    AppMain,
  }
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