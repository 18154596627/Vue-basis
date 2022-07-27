<template>
     <div id="Appc">
        <Donghua></Donghua>
        <hr>
        <Guodu></Guodu>
        <hr>
        <SAnimate></SAnimate>
    </div>
</template>

<script>
    import Donghua from './components/Donghua'
    import Guodu from './components/Guodu.vue'
    import SAnimate from './components/SAnimate'
    export default {
            name:'App',
             components:{
                Donghua,
                Guodu,
                SAnimate
            },
    }
</script>
<style scoped>
  
</style>