<template>
    <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div class="text">{{item.title}}</div>
        </a>
    </div>
</div>
</template>

<script>
    export default {
        props: {
            recommend: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        name: "HomeRecommendView"
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        text-align: center;
        font-size: 15px;
    }
    .recommend-item{
        flex: 1;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }
    .recommend img {
        height: 65px;
        width: 65px;
        margin:0px 0 5px;
    }
    .text{
        color:#023;
        font-weight: bold;
    }
</style>