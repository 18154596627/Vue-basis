<template>
     <div id="Appc">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="http:https://www.baidu.com/">更多美食</a>
        </Category>
         <Category title="游戏">
            <ul slot="center">
                <li  v-for="(f,index) in foods" :key="index">{{f}}</li>
            </ul>
            <div slot="footer" class="gainS">
                <a href="http:https://www.baidu.com/">待机游戏</a>
                <a href="http:https://www.baidu.com/">单机游戏</a>
            </div>
            
        </Category>
         <Category title="电影">
            <video controls slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
             <a slot="footer" href="http:https://www.baidu.com/">更多电影</a>
        </Category>
     </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
            name:'App',
             components:{
                Category,
            },
            data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
    }
</script>
<style scoped>
  #Appc,.gainS{
    display: flex;
    /* 主轴对齐 */
    justify-content: space-around;
  }
 img,video{
   width: 100%;
 }
</style>
