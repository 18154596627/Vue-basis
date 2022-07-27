<template>
    <div id="Student">
          <button id="Btn" @click="isHidder = !isHidder">显示和隐藏</button>
          <!-- 使用transition包裹过渡的元素，appear默认true -->
          <transition appear name="hello">
             <h2 v-show="isHidder">我是一个学生</h2>
          </transition>
        </div>
</template>

<script>
    export default{
             name:'Donghua',
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
     /* 3、使用tranform标签特定的方法 */
    .hello-enter-active{
        animation: hello 0.5s linear;
    }
    .hello-leave-active{
        animation: hello 0.5s linear reverse;
    }
    /* 1、定义动画关键字 */
    @keyframes hello{
        from{
            transform: translateX(-100%)
        }
       to{
          transform: translateX(0px)
       }
    }
   
</style>