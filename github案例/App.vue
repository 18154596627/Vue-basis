<template>
     <div id="Appc">
        <Search></Search>
        <list></list>
    </div>
</template>

<script>
    import Search from './components/Search.vue'
    import List from './components/List.vue'
    export default {
            name:'App',
             components:{
                Search,
                List
            },
    }
</script>
<style scoped>
  
</style>