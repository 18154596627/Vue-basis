<template>
    <div id="Student">
            <h2>学生姓名:{{studentName}}</h2>
            <h2>学生性别:{{sex}}</h2>
            <button @click="sentStudentName" id="StudentBtn">通过自定义事件和ref传值</button>
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
                    this.$emit('getStudentName',this.studentName)
                }
            }
           
        }

</script>

<style scoped>
    #Student{
        background-color:skyblue;
    }
    #StudentBtn{
        line-height: 30px;
        margin: 10px;
      
    }
</style>