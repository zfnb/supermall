<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        props: {
            isProbeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type:Boolean,
                default: false
            }
        },
        name: "Scroll",
        data() {
            return {
                scroll: null,
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.isProbeType,
                pullUpLoad:this.pullUpLoad
            })
            this.scroll.on('scroll', (position) => {
                this.$emit("isHidden",position)
            })
            this.scroll.on('pullingUp',()=>{
               this.$emit('pullingUp');
            })
        },
        methods: {
            scrollTo() {
                this.scroll.scrollTo(0, 0, 500);
            },
            finishPullUp(){
                this.scroll.finishPullUp();
            },
            refresh(){
              this.scroll.refresh();
            }
        }
    }
</script>

<style scoped>
    .content {


    }
</style>