<template>
    <div id="container">
        <h2>当前求和为：{{this.$store.state.sum}}</h2>
        <select v-model="number">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="Add">+</button>
        <button @click="Del">-</button>
        <button @click="JishuAdd">当前求和为奇数在加</button>
        <button @click="LazyAdd">等一等在加</button>
    </div>
  
</template>

<script>
    export default {
        name:'Count',
        data(){
            return{ 
                number:1,
            }
        },
        methods:{
            Add(){ 
                // 调用dispatch方法,add方法名，this.number操作的数值
                this.$store.dispatch('add',this.number)
            },
            Del(){
               this.$store.dispatch('del',this.number)
            },
            JishuAdd(){
               this.$store.dispatch('JishuAdd',this.number)
            },
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