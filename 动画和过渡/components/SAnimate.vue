<template>
    <div>
          <button id="Btn" @click="isHidder = !isHidder">第三方库显示和隐藏</button>
          <transition 
             appear 
             name="animate__animated animate__bounce"
             enter-active-class="animate__rubberBand"
             leave-active-class="animate__backOutUp">
             <h2 v-show="isHidder">我是一个学生</h2>
          </transition>
    </div>
</template>
<script>
    import 'animate.css'
    export default{
             name:'SAnimate',
             data(){
                return{
                    isHidder:true
                }  
             },
              
        }
</script>

<style scoped>
    h2{
        background-color: skyblue;
        line-height: 70px;
        color:orange;
    }
    #Btn{
        line-height: 30px;
    }
</style>