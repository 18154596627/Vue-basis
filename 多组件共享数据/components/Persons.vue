<template>
    <div>
        <h2>人员信息</h2>
        <ul>
            <li v-for="(p,index) in personList" :key="index">
                {{p.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Persons',
        data(){
            return{
             name:''
            }
        },
        computed:{
            // 程序员编写的代码，也可使用mapState方法实现
            personList(){
               return this.$store.state.PersonList
            }
        }
    }
</script>

<style>

</style>