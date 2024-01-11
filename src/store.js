import { reactive } from 'vue';

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    endpointArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardList: [],
    loading: true,
    selectArchetype: '',
})