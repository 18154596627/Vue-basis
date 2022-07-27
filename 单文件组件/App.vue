<template>
     <div id="Appc">
        <h1 v-if="PrintSchoolName || PrintSchoolDress">学校的名称是：{{PrintSchoolName}}{{PrintSchoolDress}}</h1>
        <!-- 1、getSchoolName通过父组件给子组件传递函数类型的props实现子给父传递数据 
            2、通过父组件给子组件绑定一个自定义事件getAdress实现子给父传递数据（第一种写法，使用@或v-on-->
        <School :getSchoolName="getSchoolName" @getAdress="getSchoolAddress"></School>
        <hr>
        <!--3、通过父组件给子组件绑定一个自定义事件实现:子给父传递数据（比较灵活）-->
        <Student ref="Student"></Student>
        <h1 v-if="PrintStudentName">学生姓名：{{PrintStudentName}}</h1>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student'
    export default {
            name:'App',
             components:{
                School,
                Student
            },
            data(){
                return{
                    PrintSchoolName:'',
                    PrintSchoolDress:'',
                    PrintStudentName:'',
                }  
            },
            methods:{
                getSchoolName(name){
                    console.log('收到了学校名',name)
                    this.PrintSchoolName = name
                },
                getSchoolAddress(name){
                    console.log("收到了学校地址")
                    this.PrintSchoolDress = name
                },
                getStudentName(name){
                    this.PrintStudentName = name
                }
            },
             // App加载完成后调用
                mounted(){
                    // 当getStudentName事件在Student被触发时调用getSchoolAddress函数
                    this.$refs.Student.$on('getStudentName',this.getStudentName)
                }
    }
</script>
<style scoped>
    #Appc{
        background-color: orange;
        padding: 30px;
    }
</style>