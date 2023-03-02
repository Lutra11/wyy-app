<!--  -->
<template>
    <div class='itemMusicList'>
        <div class="musicListTop">
            <!-- 头部 -->
            <div class="play">
                <div class="left">播放全部 <span>(共{{ musicList.length }}首)</span></div>
                <div class="right">收藏<span>({{ subscribedCount }})</span></div>
            </div> 
            <!-- 歌名加作者 -->
            <div class="musiclist" v-for="(item,index) in musicList" :key="index" @click="playMusic(index)" >
                <div class="id" >{{ index + 1}}</div>
                <div class="musicname" >{{ musicList[index].name}}</div>
                <div class="creator" >{{ musicList[index].ar[0].name}}</div>
                
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {

setup(props){
        if(props){
             console.log(props);
            //  console.log(this.musicList);
            //  props.playlist= JSON.parse(sessionStorage.getItem().playlist)
        } 
    },
    props:['musicList','subscribedCount'],

methods: {
    ...mapMutations(['updateisPlayList','updateIndex']),
    playMusic:function(i){
        this.updateisPlayList(this.musicList)
        this.updateIndex(i)
    },
watch:{
   
}


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
<style lang='less' scoped>
//@import url(); 引入公共css类
.musicListTop{
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    margin-top: 30px;
    
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    .play{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px;
       
        .left{
            font-weight: 900;
            span{
                font-size: 10px;
                font-weight: normal;
            }
        }
        .right{
            font-size: 0.10rem;
            color: white;
            background-color: red;
            text-align: center;
            width: 85px;
            height: 30px;
            line-height: 30px;
            border-radius: 10px;
            margin-left: 15%;

        }
    }
    .musiclist{
        margin: 6px ;
        padding-left: 10px;
        position: relative;
        margin-left: 20px;
        .id{
            position: absolute;
            left: -3.5%;
            top: 25%;
            align-items: center;
        }
        .musicname{
            margin-bottom: 10px;
           
            font-size: 0.3rem;
            font-weight: 900;
        }
        .creator{
            font-size: 0.125rem;
        }
    }
}

</style>