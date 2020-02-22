<template>
    <swiper class="swiperstart">
        <swiper-item v-for="item in topImages">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        props: {
            topImages: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        name: "DetailSwiper",
        components: {
            Swiper,
            SwiperItem,
        },
    }
</script>

<style scoped>
.swiperstart{
    height: 300px;
    overflow: hidden;
}
</style>