<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store.js'

import SingleCard from './SingleCard.vue'

export default {
    name: "CardList",
    components: {
        SingleCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
    <div class="card-list-yugi d-flex flex-wrap justify-content-between">
            <SingleCard v-for="Card, index in store.cardList" :key="index" :Card="Card"></SingleCard>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.card-list-yugi {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
}    

</style>