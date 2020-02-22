<template>
    <nav-bar class="navbar" >
        <div slot="left" @click="goBack">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div class="item" slot="center"
             v-for="(item,index) in title"
             :class="{active:currentIndex == index}"
             @click="changeActive(index)"
        >{{item}}
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "ChildNavBar",
        data() {
            return {
                title: ['商品', '参数', '评论', '推荐'],
                currentIndex:0
            }
        },
        methods:{
            changeActive(index){
                this.currentIndex = index;
            },
            goBack(){
                this.$router.back();
            }
        },
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .nav-bar{
        position: relative;
        background-color: #f6f6f6;
    }
img{
    width:20px;
    position:absolute;
    top:11px;
}
    .active{
        color:yellowgreen;
        font-size:22px !important;
    }
</style>