<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">内容</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

// scoped表示该样式为局部样式不会影响其他
<style lang="stylus" scoped>
    .header
        display flex
        line-height .86rem
        background #00bcd4
        color #ffffff
        .header-left
            width .64rem
            float left
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
        
</style>