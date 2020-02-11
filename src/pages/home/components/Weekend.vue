<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom">
                <div class="item-img-wrapper">
                    <img src="https://imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_216x190_9cdf9f18.jpg" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">三亚游泳池</p>
                    <p class="item-desc">啊好大的游泳池啊</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Weekend"
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height .8rem
        background #eee
        text-indent .2rem
        margin-top .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()

</style>