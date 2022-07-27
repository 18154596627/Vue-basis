<template>
    <div id="container">
        <h3>{{title}}</h3>
        <slot name="center"></slot>
        <slot name="footer"></slot>
    </div>
  
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
    }
</script>

<style>
    #container{
        background-color: skyblue;
        width: 300px;
        height: 400px;
        line-height: 30px;
    }
    h3{
        background-color: orange;
        line-height: 36px;
        text-align: center;
    }
  
</style>