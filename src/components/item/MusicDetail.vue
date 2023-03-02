<!--  -->
<template>
<div class='MusicDetail' style="position:relative;">
    <img :src="musicList.al.picUrl" alt="" style="width:100%;height:130%;position:absolute;z-index:-999;" class="back">
   <div class="top">
        <div class="top-left">
            <svg class="icon" aria-hidden="true" @click="updatedetailShow">
                <use xlink:href="#icon-fanhui"></use>
            </svg>
            <div class="unknown">
                <Vue3Marquee>{{ musicList.name }}</Vue3Marquee>
                <span>{{ musicList.ar[0].name }}></span>
            </div>
        </div>

        <div class="top-right">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
        </div>
   </div>

   <div class="middle">
    <img src="@/assets/lagan.png" alt="" class="lagan" :class="{lagan_active:!isbtnShow}">
    <img src="@/assets/cd.png" alt="" class="cd" >
    <img :src="musicList.al.picUrl" alt="" class="img" :class="{img_active:!isbtnShow,img_paused:isbtnShow}">
   </div>

   <div class="bottom">
    <div class="bottom-top">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xihuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang1"></use>
        </svg>
    </div>

    <div class="bottom-middle">
        123
    </div>

    <div class="bottom-bottom">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-left"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow" >
        <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-you-yuan"></use>
        </svg>
    </div>
    
   </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations } from 'vuex';
export default {
    props:['musicList','isbtnShow','play'],
//import引入的组件需要注入到对象中才能使用
components: {
    Vue3Marquee,
},
data() {
//这里存放数据
return {

};
},

//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    getMusicList(){
        console.log(this.musicList);
    },
    ...mapMutations(['updatedetailShow',])
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
   this.getMusicList();
   
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {
    
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.icon{
    height: .5rem;
    width: .5rem;
}
.back{
    filter: blur(40px);
    border-color: rgb(65, 65, 65);
}
.top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    .top-left{
        display: flex;
        flex-direction: row;
        margin-left: 0px;
        color: rgb(193, 193, 193);
        .unknown{
            margin-left: 10px;
            .vue3-marquee{
                width: 2rem;
                font-weight: 900;
            }
            span{
                font-size: 8px;
                color: rgb(124, 123, 123);
                font-weight: 500;
            }
        }
    }

}

.middle{
    width: 100%;
    height: 400px;
    position: relative;
    .lagan{
        position:absolute;
        width: 2rem;
        height: 3rem;
        top: 10%;
        left: 50%;
        transform-origin: 0 0;
        transform: rotate(-10deg);
        transition: all 2s;

    }
    .lagan_active{
        position:absolute;
        width: 2rem;
        height: 3rem;
        top: 10%;
        left: 50%;
        transform-origin: 0 0;
        transform: rotate(0deg);
        transition: all 2s;

    }
    .cd{
        position: absolute;
        width: 5rem;
        height: 5rem;
        top: 10%;
        left: 18%;
        z-index: -98;
    }
    .img{
        position: absolute;
        width: 3.5rem;
        height: 3.5rem;
        top: 18%;
        left: 30%;
        z-index: -99;
        border-radius: 60px;
        animation: imgAnimation 20s linear infinite;
    }
    .img_active{
       animation-play-state: running;
    }
    .img_paused{
        animation-play-state: paused;
    }
    @keyframes imgAnimation {
            0%{
                transform: rotateZ(0deg);
            }
            100%{
                transform: rotateZ(360deg);
            }
     }

    img{
        width: 100%;
    }
}

.bottom{
    margin: 10px;
    .bottom-top{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .bottom-bottom{
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        
    }
    .bottom-bottom .icon:nth-child(2){
        width: 1rem;
        height: 1rem;
    }
}

</style>