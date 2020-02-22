<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center" class="item"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
        background-color: #ff8198;
    }

    .left, .right {
        width: 40px;
    }

    .center {
        display: flex;
        justify-content: center;
        flex: 1;
    }
    .center .item{
        font-size:18px;
        font-weight: bold;
        flex: 1;
    }
</style>