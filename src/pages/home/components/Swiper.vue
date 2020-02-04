<template>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide><img class="swipe-image" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2464191143,1922492981&fm=26&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="swipe-image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580818077048&di=40e3d68c40360c166c01e7dcf9f3f7e7&imgtype=0&src=http%3A%2F%2Fd.yymoban.com%2Fuploads%2Fallimg%2F1411%2F1-141119195245320.jpg" alt=""></swiper-slide>
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
                loop: true
            }
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