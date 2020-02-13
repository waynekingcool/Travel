<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id"
                    @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="city of item" :key="city.id" @click="handleCityClick(city.name)">{{city.name}}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
// 导入第三方
import BScroll from 'better-scroll'
export default {
    name:"CityList",
    mounted(){
        //设置scroll
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    watch:{
        letter(){
            console.log('改变了')
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
        }
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch('changeCity',city)
            // 也可以不通过action直接commit
            // this.$store.commit('changeCity',city)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #cccccc
        &:after
            border-color #cccccc
    .border-bottom
        &:before
            border-color #cccccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        // background red
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left
                width 33.3%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius 0.6rem
        .item-list
            .item
                line-height .54rem
                color #666666
                padding-left .2rem
</style>