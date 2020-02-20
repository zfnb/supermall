<template>
    <div class="good-item">
        <img :src="goodItem.show.img" @load="isLoad" alt="">
        <div class="goods-info">
            <p class="title">{{goodItem.title}}</p>
            <span class="price">单价：{{goodItem.price}}元</span>
            <span>-</span>
            <span class="collect">库存：{{goodItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PictureListItem",
        props: {
            goodItem: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        methods:{
            isLoad(){
                this.$bus.$emit("isLoad");
            }
        }
    }
</script>

<style scoped>
    .good-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }

    .good-item img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; /* 这里和上面的position相呼应*/
        margin-bottom: 3px;
    }
</style>