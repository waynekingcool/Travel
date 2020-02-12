<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item"
        :ref="item"
        @click="handleItemClick"
        @touchstart="handleItemTouch"
        @touchmove="handleItemMove"
        @touchend="handleItemEnd">{{item}}</li>
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
        },
        handleItemTouch(){
            this.touchStatus = true
        },
        handleItemMove(e){
            if(this.touchStatus){
                const startY = this.$refs['A'][0].offsetTop
                console.log(startY)
                const touchY = e.touches[0].clientY - 79
                const index = Math.floor((touchY-startY)/20)
                this.$emit('change', this.letters[index])
            }
        },
        handleItemEnd(){
            this.touchStatus = false
        }
    },
    data(){
        return {
            touchStatus: false
        }
    },
    computed:{
        letters(){
            const letters = []
            for (let i in this.cities){
                letters.push(i)
            }
            return letters
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