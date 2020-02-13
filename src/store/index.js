import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //默认优先从localstore中取数据
        city: localStorage.city || "北京"
    },
    actions:{
        changeCity(ctx,city){
            ctx.commit('changeCity',city)
        }
    },
    mutations:{
        changeCity(state,city){
            state.city = city
            localStorage.city = city
        }
    }
})