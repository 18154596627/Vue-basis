<template>
  <div>
    <ul>
        <li>{{this.$route.query.id}}</li>
        <li>{{this.$route.query.title}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name:'Detail',
        mounted(){
            console.log(this.$route)
        }
    }
</script>