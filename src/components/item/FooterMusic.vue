<!--  -->
<template>
    <div class="footer">
        <div class="left" @click="updatedetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt="" class="cd" :class="{cd_active:!isbtnShow,cd_paused:isbtnShow}">
            <div class="name">
                <!-- <p>{{playList[playListIndex].al.name}}</p> -->
                <p>{{playList[playListIndex].name?.substring(0,8)}}</p>

                <span>横滑切换上下首</span>
            </div>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofang"  ></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-zanting"></use>
            </svg>

            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caidan"></use>
            </svg>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>


        <!-- 弹出框 -->
        <van-popup v-model:show="detailShow"  position="bottom" :style="{ height: '100%',width:'100%' }">
            <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"></MusicDetail>
        </van-popup>
    </div>
</template>

<script>


import {mapState} from 'vuex'
import { mapMutations } from 'vuex'
import MusicDetail from '@/components/item/MusicDetail.vue';
export default {
    methods:{
        play:function(){
            // console.log(111);
            if(this.$refs.audio.paused){
                this.$refs.audio.play();
                this.updateisbtnShow(false);
            }else{
                this.$refs.audio.pause();
                this.updateisbtnShow(true);
            }
            // console.log(this.playList[playListIndex]);
        },
        ...mapMutations(['updateisbtnShow','updatedetailShow']),
        
    },
    computed: {
        //解构
        ...mapState(['playList','playListIndex','isbtnShow','detailShow'])
    },
    watch:{
        //监听playIndex数据 当其动态改变时 自动播放音乐
        playListIndex:function(){
            this.$refs.audio.autoplay = true
            if(this.$refs.audio.paused){
                this.updateisbtnShow(false)
            }
        },
        playList:function(){
            if(this.isbtnShow){
                this.$refs.audio.autoplay = true
                this.updateisbtnShow(false)
            }
        }
    },
    components:{
        MusicDetail
    },
    mounted(){
        this.$store.dispatch('getLyric',this.playList[this.playListIndex].id)
    },
    updated() {
        this.$store.dispatch('getLyric',this.playList[this.playListIndex].id)
    },
 
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.icon{
    height: .6rem;
    width: .6rem;
}
.icon:nth-child(1){
    margin-right: 16px;
}
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.4rem;
        background-color: rgb(255, 255, 255);
        border-top: 1px solid #999;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .left{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .cd{
                animation: imgAnimation 20s linear infinite;
                border: 5px solid black;
            }
            .cd_active{
                animation-play-state: running;
            }
            .cd_paused{
                animation-play-state: paused;
            }
            // border-radius: 50%;
            img{
                width: 10%;
                margin-top: 12px;
                margin-left: -50px;
                height: .8rem;
                width: .8rem;
                border-radius: 50%;  
            }
            .name{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin: 14px 6px;
                p{
                    font-weight: 800;
                }
                span{
                    font-size: 10px;
                    font-weight: 400;
                }
            }
        }
        .right{
            transform:translateY(18px);
            margin-right: -50px;
    
        }
        
    }
    @keyframes imgAnimation {
            0%{
                transform: rotateZ(0deg);
            }
            100%{
                transform: rotateZ(360deg);
            }
     }
</style>