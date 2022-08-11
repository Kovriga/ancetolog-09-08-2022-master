<template>
    <li>
        <div class="item">
            {{item.key}}: {{item.name}}
            <img src="../../public/note_alt_FILL0_wght400_GRAD0_opsz48.png" width="25" height="25"/>
            <img src="../../public/delete_FILL0_wght400_GRAD0_opsz48.png" width="25" height="25"/>
        </div>
        <ul class="list-li">
            <!-- Сида рукурсию компанента для углубления -->
            <tree-item
                    v-model="keys"
                    class="item"
                    v-for="(child, index) in item.children"
                    :key="index"
                    :item="child"
                    :parentItem="item"
            ></tree-item>
        </ul>
    </li>
</template>

<script>
    import TreeItem from './TreeItem'

    export default {

        name: 'TreeItem',
        components: [
            TreeItem
        ],
        props: {
            item: {
                required: true,
                type: Object,
            },
            parentItem: {
                required: true,
                type: Object,
            },
        },
        methods: {},
    }
</script>

<style scoped>
    .list-li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
