<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
//导入组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data:function(){
        return {
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            console.log(res);
            res = res.data;
            if(res.ret && res.data){
                console.log(res.data.city);
                this.swiperList = res.data.swiperList
                this.iconList = res.data.iconList
                this.recommendList = res.data.recommendList
                this.weekendList = res.data.weekendList;
            }
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>
