<!-- SEZIONE JS SCRIPT -->
<script>
export default {
    name: 'SingleCard',
    props: {
        Card: Object,
    },
    data() {
        return {

        }
    },
    created() {

    },
}
</script>

<!-- SEZIONE HTML -->
<template>
    <!-- CARTA -->
    <div class="card-column">
        <div class="card-content">
            <img v-for="Card, index in Card.card_images" :key="index" :src="Card.image_url" alt="">
            <h4>{{ Card.name }}</h4>
            <h5>{{ Card.archetype }}</h5>
        </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;
.card-column {
    width: calc(100% / 5 - 30px);
    background-color: $bg_orange_main_card;
    margin: 0px 0px 30px 0px;
    border-radius: 10px;
}

.card-content {
    padding-bottom: 10px;
    text-align: center;

    h4 {
        color: white;
        font-weight: 700;
        font-size: 21px;
        padding: 0 5px;
    }

    h5 {
        font-size: 15px;
    }

    h4,
    h5 {
        margin-top: 10px;
    }

    img {
        width: 100%;
    }
}
</style>