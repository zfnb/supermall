<template>
    <swiper>
        <swiper-item v-for="item in banner">
            <a :href="item.link">
                <img :src="item.image" @load="isLoad" alt="">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from "components/common/swiper/index.js"

    export default {
        props: {
            banner: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                loading: false
            }
        },
        name: "HomeSwiper",
        components: {
            SwiperItem,
            Swiper
        },
        methods: {
            isLoad() {
                if (!this.loading) {
                    this.$emit("isLoad");
                    this.loading = true;
                }

            }
        }
    }
</script>

<style scoped>

</style>