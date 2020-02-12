<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key"
        @click="handleItemClick">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    methods:{
        handleItemClick(e){
            this.$emit('change',e.target.innerText)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top 1.58rem
        bottom 0
        width 0.4rem
        // background red
</style>