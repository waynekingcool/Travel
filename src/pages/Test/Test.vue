<template>
    <div class="grid">
        <div class="iconfont back-icon">&#xe743;</div>
    </div>
</template>

<script>
import {name} from './wbtest.js'
export default {
    name: "Test",
    created:function(){
        console.log('xxx')
        console.log(name)
    }
}
</script>

<style lang="stylus" scoped>
.grid
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    background #cccccc
    font-size .32rem
    .back-icon
        text-align center
        font-size .4rem
        width .64rem
        color #ffffff
</style>