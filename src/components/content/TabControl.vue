<template>
    <div class="tab-control">
        <div class="item" v-for="(item,index) in title"
             :class="currentIndex==index?'active':''"
             @click="handle(index)"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            handle(index) {
                this.currentIndex = index;
                this.$emit('tabClick', index);
            }
        },
        name: "TabControl"
    }
</script>

<style scoped>
    .tab-control {
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: flex;
        background-color: #eff;
        z-index: 9;
    }

    .tab-control .item {
        flex: 1;
        padding: 0px 0px 5px;
    }

    .active {
        color: yellowgreen;
        font-weight: bold;
    }

    .active span {
        border-bottom: 2px solid;
    }
</style>