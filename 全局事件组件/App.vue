<template>
     <div id="Appc">
        <School></School>
        <hr>
        <Student></Student>
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
    }
</script>
<style scoped>
    #Appc{
        background-color: orange;
        padding: 30px;
    }
</style>