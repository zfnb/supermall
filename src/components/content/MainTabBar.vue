<template>
    <tab-bar>
        <tab-bar-item link="/home" colorStyle="deeppink">
            <img slot="item-icon" src="~assets/img/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/home-active.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item link="/category" colorStyle="deeppink">
            <img slot="item-icon" src="~assets/img/category.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/category-active.svg" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item link="/cart" colorStyle="deeppink">
            <img slot="item-icon" src="~assets/img/shop.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/shop-active.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item link="/personal" colorStyle="deeppink">
            <img slot="item-icon" src="~assets/img/profile.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/profile-active.svg" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>