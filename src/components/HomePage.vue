<template>
    <div>
        <h1>
            Это будет список в списке и списком погонять
        </h1>
        <div class="list">
            <div v-for="(item, index) in $store.state.list" :key="index">
                {{item.nameListHouse}}
                <div class="bottom-bar" @click="openName(index)">
                    <img src="../../public/note_alt_FILL0_wght400_GRAD0_opsz48.png" width="30" height="30">
                </div>
                <NameRoom v-if="index === num" :itemNameRoom="item.jobList"/>
            </div>
        </div>
    </div>
</template>


<script>
    import NameRoom from './NameRoom.vue';

    export default {
        name: 'HomePage',
        components: {
            NameRoom
        },
        data() {
            return {
                visibleList: false,
                num: '',
            }
        },
        methods: {
            openName(item) {
                if (this.num === item) {
                    this.num = null;
                }
                this.num = item;
            },
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
        justify-content: center;
        border: black 1px solid;
        border-radius: 5px;
    }
    .list > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .list > div > div {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
