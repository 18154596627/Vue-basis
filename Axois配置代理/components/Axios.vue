<template>
    <div>
          <button id="Btn" @click="GetData">通过Axios获取数据</button>
    </div>
</template>
<script>
    export default{
             name:'Axios',
             data(){
                return{
                    isHidder:true
                }  
             },
             methods:{
                //方法一 请求数据
                // GetData(){
                //     axios.get('http://localhost:8081/data').then(
                //         Response=>{
                //             console.log('成功获取数据',Response.data)
                //         },
                //         error=>{
                //             console.log('获取数据失败',error.message)
                //         }
                //     )
                // },

                // 方法一 请求数据
                GetData(){
                  axios.get('http://localhost:8081/api/data').then(
                      Response=>{
                          console.log('成功获取数据',Response.data)
                      },
                      error=>{
                          console.log('获取数据失败',error.message)
                      }
                  )
             } 
             }   
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