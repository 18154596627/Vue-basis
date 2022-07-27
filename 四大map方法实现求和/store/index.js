import Vue from 'vue';
import Vuex from 'vuex';

// 使用vuex
Vue.use(Vuex)
// 准备actions——用于响应组件中的动作
const actions ={
    add(context,value){
        // ADD是mutations的函数
        context.commit('ADD',value)
    },
    del(context,value){
        context.commit('DEL',value)
    },
    JishuAdd(context,value){
        context.commit('JishuAdd',value)
    },
    LazyAdd(context,value){
        context.commit('LazyAdd',value)
    }
}
// 准备mutations——用于操作数据（state）
const mutations ={
    ADD(state,value){
        state.sum += value 
        console.log(state.sum)
    },
    DEL(state,value){
        state.sum -= value
    },
    JishuAdd(state,value){
        if(state.sum %2){
            state.sum += value
        }
    },
    LazyAdd(state,value){
        state.sum += value
    }
}
// 准备state——用于存储数据
const state ={
    sum:0,
    name:'嫦娥',
    school:'清华大学'
}
// getters配置项
const getters ={
    bigSum(state){
        return state.sum*10
    }
}
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})