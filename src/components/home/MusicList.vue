<!--  -->
<template>
    <div class='MusicList'>
        <div class="MusicTitle">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="MusicSwiper">
            <van-swipe :autoplay='false' :width="150" class="my-swiper">
                <van-swipe-item v-for="item in musicList" :key="item" class="img-swiper">
                    <!-- 路由跳转到歌单详情 -->
                    <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                    <span class="playCount">
                         {{ changeCount(item.playCount)}} 
                    </span>

                    <img :src="item.picUrl" alt="" >
                    
                    <span class="name">{{item.name}}  </span>
                </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
            
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getMusic } from '@/request/api/home.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
    return {
        musicList:[],
    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    async getMusicList(){
        let res= await getMusic();
        // console.log(res);
        this.musicList = res.data.result
        
    },
    changeCount:function(num){
        if(num>=100000000){
            return (num/10000000).toFixed(1)+"亿"
        }else if(num>=10000){
            return (num/10000).toFixed(1)+"万"
        }
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getMusicList();
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
<style lang='less' scoped>
//@import url(); 引入公共css类
.MusicTitle{
    display: flex;
    margin: 0 10px;
    // margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    .title{
        font-size: 20px;
        font-weight: 900;
    }
    .more{
        font-size: 0.125rem;
        color: rgb(116, 117, 117);  
        height: 30px;
        width: 55px;
        line-height: 30px;
        text-align: center;
        border: 1px solid rgb(178, 178, 178);
        border-radius: 10px;
    }
}

.MusicSwiper{
    width: 100%;
    height: 3.75rem;
    .my-swiper{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 4.5rem;
        .img-swiper{
            position: relative;
            .playCount{
                position: absolute;
                font-size: 10px;
                color: white;
                top: 3%;
                right: 12%;
                background-color: rgba(191, 191, 191, 0.1);
            }
            .name{
                font-size: 10px;
                font-weight: 800;
                margin: 0 15px;
                text-align: center;
            }

        }
        img{
            padding: 0 3px;
            border-radius: 30px;
        }
    }
}
.van-swipe .van-swipe__track .van-swipe-item img{
    width: 100%;
    height: 150px;
}
.van-swipe__indicators{
    display: none;
}
a{
    color: black;
}

</style>