<template>
    <div id="home">
        <nav-bar class="home-dev">
            <div slot="center">购物吧！</div>
        </nav-bar>
        <tab-control class="tab-control" :title="['流行','新品','精选']"
                     @tabClick="tabClick"
                     ref="tabcontrol1"
                     v-show="isFixed"
        ></tab-control>
        <scroll class="content" ref="scroll" :isProbeType="2"
                @isHidden="isHidden"
                :pullUpLoad="true"
                @pullingUp="loadMore"
        >
            <home-swiper v-if="isLoader" :banner="banner"
                         @isLoad="isLoad"
            ></home-swiper>
            <home-recommend-view :recommend="recommend"></home-recommend-view>
            <Feature-view></Feature-view>
            <tab-control class="tab-control" :title="['流行','新品','精选']"
                         @tabClick="tabClick"
                         ref="tabcontrol2"
            ></tab-control>
            <goods-list :goods="changeList"></goods-list>
        </scroll>
        <back-top @click.native="backTop" v-if="isShow"></back-top>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childcomponts/HomeSwiper";
    import {getHomeMultidata, getHomeData} from "network/HomeRequest";
    import HomeRecommendView from "./childcomponts/HomeRecommendView";
    import FeatureView from "./childcomponts/FeatureView";
    import TabControl from "components/content/TabControl";
    import GoodsList from "components/content/goods/GoodsList";
    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/content/BackTop";
    // import ChildNavBar from "../detail/childrencomp/ChildNavBar";


    export default {
        name: "Home",
        data() {
            return {
                banner: [],
                recommend: [],
                isLoader: false,
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop',
                isShow: false,
                tabOffset: 0,
                isFixed: false,
                saveY: 0
            }
        },
        activated() {
            this.$refs.scroll.refresh();
            this.$refs.scroll.scroll.scrollTo(0, this.saveY);
        },
        deactivated() {
            this.saveY = this.$refs.scroll.scroll.y;
        },
        computed: {
            changeList() {
                return this.goods[this.currentType].list
            }
        },
        created() {
            this.getHomeMultidata();
            this.getHomeData('pop');
            this.getHomeData('new');
            this.getHomeData('sell');
        },
        mounted() {
            document.title = "商城首页";
            const refresh = this.debounce(this.$refs.scroll.refresh, 200);
            this.$bus.$on("isLoad", () => {
                refresh();
            })
        },
        methods: {
            isLoad() {
                // console.log(this.isHidden());
                this.tabOffset = this.$refs.tabcontrol2.$el.offsetTop;
            },
            debounce(func, delay) {
                let timer = null;
                return function (...args) {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, delay);
                }
            },
            loadMore() {
                this.getHomeData(this.currentType);
            },
            isHidden(position) {
                this.isFixed = (-position.y) > this.tabOffset;
                if ((-position.y) > 1000) {
                    this.isShow = true
                } else {
                    this.isShow = false
                }
            },
            backTop() {
                this.$refs.scroll.scrollTo(0, 0, 500);
            },
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = 'sell';
                        break;
                }
                this.$refs.tabcontrol1.currentIndex = index;
                this.$refs.tabcontrol2.currentIndex = index;
            },
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    this.banner = res.data.data.banner.list;
                    this.recommend = res.data.data.recommend.list;
                    if (res != null) {
                        this.isLoader = true
                    }
                })
            },
            getHomeData(type) {
                const page = this.goods[type].page + 1;
                getHomeData(type, page).then(res => {
                    // console.log(res.data.data.list);
                    this.goods[type].list.push(...res.data.data.list);
                    this.goods[type].page++;
                    this.$refs.scroll.finishPullUp();
                })
            }
        },

        components: {
            NavBar,
            HomeSwiper,
            HomeRecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        }
    }
</script>

<style scoped>
    #home {
        position: relative;
        left: 0;
        top: 0;
        padding-top: 44px;
        height: 100vh;
        box-sizing: border-box;
    }

    #home .home-dev {
        z-index: 9;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }

    .tab-control {
        position: sticky;
        top: 44px;
    }

    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
</style>