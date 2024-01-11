<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from "../store";
import axios from "axios";
export default {
    data() {
        return {
            store,
            archetypeArr: []
        }
    },
    created() {
        this.getarchetypeArray()
    },
    methods: {
        getarchetypeArray() {
            let archetype = [];

            axios.get(store.endpointArchetype).then(response => {
                archetype = response.data;
                for (let i = 1; i <= 6; i++) {
                    let num = Math.floor(Math.random() * 526);
                    console.log(this.archetypeArr.includes(archetype[num].archetype_name));
                    if (!this.archetypeArr.includes(archetype[num].archetype_name)) {
                        this.archetypeArr.push(archetype[num].archetype_name)
                    }
                }
            })


        },
    },
}
</script>
<template lang="">
    <div class="row mt-3">
        <div class="col-12 d-flex justify-content-center">
            <div class="d-flex gap-3 pb-3">
                <select class="form-select form-select-md" v-model="store.selectArchetype">
                    <option selected value="">Seleziona un Archetipo</option>
                    <option v-for="(archetype, index) in archetypeArr" :key="index" :value="archetype">{{ archetype }}</option>
                </select>
                <div class="btn btn-md btn-success" @click="$emit('filter')">Cerca</div>
                <div class="btn btn-md btn-danger" @click="$emit('reset_select')">Ripulisci</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
</style>