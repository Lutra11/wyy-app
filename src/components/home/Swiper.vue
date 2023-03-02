<!--  -->
<template>
<div class='Swiper'>
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <!-- 配合 Lazyload 组件实现图片懒加载 -->
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in state.images" :key="index">
            <img v-lazy="image.pic" />
        </van-swipe-item>
    </van-swipe>

</div>
</template>

<script>


import { reactive,onMounted } from 'vue';
import { getBanner } from '@/request/api/home.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
setup(){
    const state  = reactive({
        images:[

      ]});
      onMounted(async()=>{
        // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
        //     // console.log(res);
        //     state.images = res.data.banners;
        //     console.log(state.images );
        // })
        let res = await getBanner();
       state.images = res.data.banners
      })
      return {state};
    
},
data() {
//这里存放数据
return {
}
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' >
    .van-swipe{
        width: 100%;
        margin-top: 10px;
        border-radius: 10px;
        // padding: 0.125rem;
        .van-swipe__track{
            .van-swipe-item{
                img{
                    width: 100%;
                    height: 160px;
                }
            }
        }
    }
    .van-swipe__indicator--active{
        background-color: #ea7f05;
    }

</style>