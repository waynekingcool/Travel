<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
        
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities: {},
            hotCities:[]
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(this.cityInfoHandle)
        },
        cityInfoHandle(res){
            // console.log(res)
            const data = res.data.data
            this.cities = data.cities
            this.hotCities = data.hotCities
            console.log(this.cities)
            console.log(this.hotCities)
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>