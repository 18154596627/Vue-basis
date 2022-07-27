<template>
    <div id="Student">
          <button id="Btn" @click="isHidder = !isHidder">过渡显示和隐藏</button>
          <!-- 使用transition包裹过渡的元素，appear默认true -->
          <transition appear name="hello">
             <h2 v-show="isHidder">我是一个学生</h2>
          </transition>
        </div>
</template>
<script>

    export default{
             name:'Guodu',
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
    /* 进入的起点，离开的终点 */
  .hello-enter,.hello-leave-to{
    transform: translateX(-100%);
  }
  /* 进入、离开的过程 */
  .hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
  }
  /* 离开的起点，进入的终点 */
  .hello-leave,.hello-enter-to{
    transform: translateX(0);
  }
</style>