<template>
    <div id="container">
        <h2>当前求和为：{{sum}}</h2>
        <h2>放大十倍的数据：{{bigSum}}</h2>
        <select v-model="number">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="Add(number)">+</button>
        <button @click="Del(number)">-</button>
        <button @click="JishuAdd(number)">当前求和为奇数在加</button>
        <button @click="LazyAdd(number)">等一等在加</button>
        <h2>我是{{name}},来自{{school}}</h2>
    </div>
  
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
    export default {
        name:'Count',
        data(){
            return{ 
                number:1,
            }
        },
        computed:{
            // ...表示把mapState里的方法拆分
            // mapState用于帮助映射state中的数据为计算属性（数组写法）
            ...mapState(['sum','name','school']),
            // mapState用于帮助映射state中的数据为计算属性（数组写法）
            ...mapGetters(['bigSum'])
        },
        methods:{

            // 程序员编写的代码
            // Add(){ 
            //     // 调用dispatch方法,add方法名，this.number操作的数值
            //     this.$store.dispatch('add',this.number)
            // },
            // Del(){
            //    this.$store.dispatch('del',this.number)
            // },
            // JishuAdd(){
            //    this.$store.dispatch('JishuAdd',this.number)
            // },



            // 使用mapMutations，mapActions编写的代码
            ...mapActions({Add:'add',Del:'del'}),
            ...mapMutations(['JishuAdd']),



            LazyAdd(){
                setTimeout(()=>{
                    this.$store.dispatch('LazyAdd',this.number)
                },500)

                }
        }
    }
    
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>>
   
  
</style>