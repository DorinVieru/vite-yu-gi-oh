<!-- SEZIONE JS SCRIPT -->
<script>

// RICHIAMO LE COMPONENTI
import CardList from './CardList.vue'

export default {
    name: "AppMain",
    components:{
        CardList
    },
    data() {
        return {

        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
<main>
    <div class="container">
        <!-- ELENCO DELLE CARTE -->
        <CardList />
    </div>
</main>  
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

 main{
    background-color: $bg_orange_main_card;
    padding: 75px 0;
 }


</style>