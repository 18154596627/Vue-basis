<template>
    <div id="School">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
<script>
    export default {
        name:'School',
        data(){
            return{
                schoolName:'武汉大学',
                address:'xxx省xxx市'
            }
        },
        mounted(){
            // 绑定Bus事件，接受数据
            this.$bus.$on('Bus',(data)=>{
                console.log('我是School组件,收到了数据',data)
            })
        },
        // 组件销毁之前，解除绑定Bus事件
            beforeDestroy(){
                this.$bus.$off('Bus')
            }
    }
</script>
<style scoped>
    #School{
        background-color: orangered;
    }
</style>