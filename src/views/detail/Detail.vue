<template>
    <div class="detail">
        <child-nav-bar class="tab-bar"/>
        <scroll class="content" ref="scroll">
            <detail-swiper :topImages="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info @imgLoad="imgLoad" :detailInfo="detailInfo"></detail-goods-info>
             <detail-param-info :param-info="paramInfo"></detail-param-info>
        </scroll>
    </div>
</template>

<script>
    import ChildNavBar from "./childrencomp/ChildNavBar";
    import {getDetail, Goods, Shop, GoodParam} from "network/detail";
    import DetailSwiper from "./childrencomp/DetailSwiper";
    import DetailBaseInfo from "./childrencomp/DetailBaseInfo";

    import DetailShopInfo from "./childrencomp/DetailShopInfo";
    import Scroll from "components/common/scroll/Scroll";
    import DetailGoodsInfo from "./childrencomp/DetailGoodsInfo";
    import DetailParamInfo from "./childrencomp/DetailParamInfo";
    export default {
        name: "Detail",
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detailInfo: null,
                paramInfo: {}
            }
        },

        mounted() {
            this.iid = this.$route.params.iid;
            getDetail(this.iid).then(res => {
                console.log(res.data);
                const data = res.data.result;
                //获取店铺信息
                this.topImages = res.data.result.itemInfo.topImages;
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                //获取店铺信息
                this.shop = new Shop(data.shopInfo);
                this.detailInfo = data.detailInfo;
                this.paramInfo = new GoodParam(data.itemParams.info, data.itemParams.rule);
            })

        },
        methods: {
            imgLoad() {
                this.$refs.scroll.refresh();
            }
        },
        components: {
            ChildNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll,
            DetailGoodsInfo,
            DetailParamInfo
        }
    }
</script>

<style scoped>
    .detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
        overflow: hidden;
    }

    .tab-bar {
        position: relative;
        z-index: 8;
    }

    .content {
        height: calc(100% - 44px);
    }
</style>