<template>
    <div class="shop-info">
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="title">{{shop.name}}</span>
        </div>
        <div class="shop-middle">
            <div class="shop-middle-item shop-middle-left">
                <div class="info-sells">
                    <div class="sells-count">
                        {{shop.sells|sellCountFilter}}
                    </div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods-count">
                        {{shop.goodCount}}
                    </div>
                    <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="shop-middle-item shop-middle-right">
                <table>
                    <tr v-for="(item,index) in shop.score"
                    :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better':item.isBetter}">
                            {{item.score}}
                        </td>
                        <td class="better" :class="{'better-more':item.isBetter}">
                            <span>{{item.isBetter?'高':'低'}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
            <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
            shop:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        filters:{
            sellCountFilter(result){
                return result/10000+"万";
            }
        }
    }
</script>

<style scoped>
 .shop-info{
  position: relative;
     /*display: flex;*/
 }
 /*最外包裹*/
 .shop-top{
     display: flex;
     line-height: 120px;
 }
 /*商品logo title*/
    .shop-top img{
        height: 60px;
        /*position: absolute;*/
       margin:30px 10px;
    }
    .shop-top .title{
        /*position: absolute;*/
        top:20px;
        left:100px;
        color:#ff8198;
    }
    /*中间层左侧*/
 .sells-count,.goods-count{
     font-size:20px;
     margin-bottom: 10px;
 }
    .shop-middle{
        display: flex;
        justify-content: space-around;
    }
    .shop-middle-item{
        /*position: absolute;*/
    }
    .shop-middle-left{
        text-align: center;
        display: flex;
    }
    .shop-middle-right{
        font-size: 17px;
        margin-top:10px;
    }
    .info-sells,.info-goods{
        margin-top:18px;
        font-size:15px;
    }
    .score-better{
        color: green;
        font-size: 16px;
    }
     .better{
        background-color: green;
    }
    .better-more{
        background-color: #f40;
    }

     .shop-bottom{
         text-align: center;
         margin-top:15px;
     }
</style>