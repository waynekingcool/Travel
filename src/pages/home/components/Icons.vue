<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    data:function(){
        return {
            iconList:[
                {
                    id:'0001',
                    imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
                    desc:'海外酒店海外酒店海外酒店海外酒店'
                },{
                    id:'0002',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'动物园'
                },{
                    id:'0003',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'拉拉黑3'
                },{
                    id:'0004',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'拉拉黑4'
                },{
                    id:'0005',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'动物园5'
                },{
                    id:'0006',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'拉拉黑6'
                },{
                    id:'0007',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'拉拉黑7'
                },{
                    id:'0008',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'拉拉黑8'
                },{
                    id:'0009',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:'拉拉黑9'
                }
            ]
        }
    },
    computed:{
        pages(){
            const pages = []
            this.iconList.forEach((item, index)=>{
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
        background  green
    .icon
        position relative
        float left
        width 25%
        height 0
        background red
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            background blue
            .icon-img-content
                display block
                margin 0 auto 
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $darkTextColor
            text-align center
            ellipsis()
</style>

