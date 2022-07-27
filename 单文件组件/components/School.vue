<template>
    <div id="School">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sentSchoolName" id="schoolBtn">通过props传值父组件</button>
        <button @click="sentSchoolAdress" id="schoolBtn">通过自定义事件和@传值</button>
    </div>
</template>
<script>
    export default {
        name:'School',
        // 声明接收
        props:['getSchoolName',
               'getSchoolAddress'],
        data(){
            return{
                schoolName:'武汉大学',
                address:'xxx省xxx市'
            }
        },
        methods:{
            sentSchoolName(){
                console.log("点击了按钮")
                this.getSchoolName(this.schoolName)
                console.log(this.getSchoolName)
            },
            sentSchoolAdress(){
                // 触发School组件实例身上的getAdress事件
                this.$emit('getAdress',this.address)
            }
        }
    }
</script>
<style scoped>
    #School{
        background-color: orangered;
    }
    #schoolBtn{
        line-height: 30px;
        margin-left: 5px;
    }
</style>