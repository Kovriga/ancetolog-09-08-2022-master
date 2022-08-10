<template>
    <div class="name-work">
        <div v-for="(row, i) in itemWorkName" :key="i">
            {{row.id}}: {{row.name}}
        </div>
    </div>
</template>


<script>
    export default {
        name: 'WorkNameInRoom',
        props: {
            itemWorkName: {
                required: false,
                default: {}
            }
        },
    }
</script>

<style scoped>
    .name-work{
        display: flex;
        flex-direction: column;
    }
    .name-work > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .name-work > div > div {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
