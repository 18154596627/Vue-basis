<template>
    <div id="Student">
            <h2>学生姓名:{{studentName}}</h2>
            <h2>学生性别:{{sex}}</h2>
            <button id="Btn" @click="sentStudentName">把学生名传给学校</button>
        </div>
</template>

<script>
    export default{
             name:'Student',
            data(){
                return{
                    studentName:'liangc',
                    sex:'女'
                }
            },
            methods:{
                sentStudentName(){
                    // 提供数据,绑定Bus自定义事件
                    this.$bus.$emit('Bus',this.studentName)
                }
            }
        }
</script>

<style scoped>
    #Student{
        background-color:skyblue;
    }
    #Btn{
        line-height: 30px;
    }
</style>