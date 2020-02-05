<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png" alt="">
            </div>
            <p class="icon-desc">海外酒店</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeIcons"
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .icons
        overflow hidden
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
</style>

