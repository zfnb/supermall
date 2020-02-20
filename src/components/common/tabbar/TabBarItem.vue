<template>
    <div class="tab-bar-item" @click="handle">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :class="{active:isActive}" :style="getColorStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            link: String,
            colorStyle: {
                type: String,
                default: "red"
            }
        },
        computed: {
            isActive() {
                return this.$route.path.includes(this.link);
            },
            getColorStyle() {
                return this.isActive ? {color: this.colorStyle} : {};
            }
        },
        methods: {
            handle() {
                this.$router.replace(this.link);
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        text-align: center;
        flex: 1;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img {
        width: 24px;
        margin-top: 3px;
        margin-bottom: 2px;
        vertical-align: middle;
    }

    .active {
        color: red;
    }
</style>