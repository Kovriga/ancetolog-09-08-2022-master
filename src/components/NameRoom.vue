<template>
    <div class="name-room" v-for="(item, index) in itemNameRoom" :key="index">
        <div v-for="(row, i) in item" :key="i">
            <div class="name-room-menu">
                {{row.nameRoom}}
                <div class="bottom-bar" @click="openName(i)">
                    <img src="../../public/note_alt_FILL0_wght400_GRAD0_opsz48.png" width="30" height="30">
                </div>
            </div>
            <WorkNameInRoom v-show="i === num" :itemWorkName="row.work"></WorkNameInRoom>
        </div>
    </div>
</template>

<script>
    import WorkNameInRoom from "@/components/WorkNameInRoom";

    export default {
        name: 'NameRoom',
        components: {WorkNameInRoom},
        props: {
            itemNameRoom: {
                required: false,
                default: {}
            }
        },
        data() {
            return {
                visibleNameRoom: false,
                num: '',
            }
        },
        methods: {
            openName(item) {
                if (this.num === item) {
                    this.num = '';
                }
                this.num = item;
            },
        },

    }
</script>

<style scoped>
    .bottom-bar{
        width: 25px;
        height: 25px;
        border-radius: 100%;
    }
    .name-room{
        display: flex;
        flex-direction: column;
    }
    .name-room-menu > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .name-room > div > div {
        display: flex;
        align-items: center;
        margin-left: 1em;
        justify-content: space-between
    }

</style>
