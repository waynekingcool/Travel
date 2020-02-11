<template>
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id"><img class="swipe-image" :src="item.imgUrl" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    name:"HomeSwiper",
    data:function(){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true,
            }
        }
    },
    props:{
        list:Array
    },
    computed:{
        showSwiper(){
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swipe-image
        width 100%
        height 2rem
        .swiper-pagination-bullet-active
            background red !important
</style>