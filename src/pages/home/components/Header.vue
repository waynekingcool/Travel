<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe743;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe600;</span>&nbsp;搜索内容
        </div>
        <router-link to="/city">
            <div class="header-right">
                <span class="iconfont arrow-icon">{{this.$store.state.city}}&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Header",
}
</script>

// scoped表示该样式为局部样式不会影响其他
<style lang="stylus" scoped>
// @表示src文件夹,~表示在css样式中引入css
// styles可以在bulid/webpack.base.conf.js中配置路径
@import '~styles/varibles.styl'
    .header
        display flex
        line-height .86rem
        background $bgColor
        color #ffffff
        .header-left
            width .64rem
            float left
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex 1
            background #ffffff
            border-radius .1rem
            margin-top .12rem
            height .64rem
            margin-left .12rem
            color #cccccc
            line-height .64rem
        .header-right
            width 1.24rem
            float right
            text-align center
            .arrow-icon
                font-size .24rem
        
</style>