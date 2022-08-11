<template>
    <div>
        <h1>
            Это будет список в списке и списком погонять
        </h1>
        <div class="list">
            <ul>
              <tree-item class="item" :item="$store.state.list"></tree-item>
            </ul>
        </div>
    </div>
</template>


<script>
    import TreeItem from './TreeItem.vue';

    export default {
        name: 'HomePage',
        components: {
            TreeItem
        },
        data() {
            return {
            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style scoped>
    .list {
        margin: 0 auto;
        width: 500px;
        display: flex;
        border: black 1px solid;
        border-radius: 5px;
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;
    }
    .list > div {
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .list > div > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .list-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
