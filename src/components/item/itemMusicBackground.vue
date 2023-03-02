<!--  -->
<template>
<div class='itemMusicBackground' style="position:relative;">
    <img :src="playlist.coverImgUrl" alt="" class="main" style="position:absolute;z-index:-10">
    <div class="itemMessage">
        <div class="itemTop">
            <div class="itemImg">
                <img :src="playlist.coverImgUrl" alt="">
            </div>

            <div class="itemDescrip">
                <div class="descrpTop">{{playlist.name}}</div>
                <div class="descrpMiddle">{{playlist.tags?.toString().replace(/,/g," ")}}</div>
                <div class="descrpBottom">{{playlist.description?.substring(1,30)}}...</div>
            </div>

        </div>

        <div class="itemBottom">
            <div class="itemBottomIcon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun-copy"></use>
                </svg>
            </div>
            <div class="itemBottomIcon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang-copy"></use>
                </svg>
            </div>
            <div class="itemBottomIcon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yunduanxiazai-copy"></use>
                </svg>
            </div>
            <div class="itemBottomIcon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-duoxuananniu-copy"></use>
                </svg>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    setup(props){
        if((props.playlist="")){
             console.log(props);
             props.playlist= JSON.parse(sessionStorage.getItem().playlist)
        } 
    },
    props:['playlist'],
//import引入的组件需要注入到对象中才能使用
components: {},
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
.icon{
    height: 0.6rem;
    width: 0.6rem;
}
.itemMusicBackground{
    .main{
        width: 100%;
        height: 6.25rem;
        margin-top: -15%; 
        filter: blur(40px);
    }
    
}
.itemMessage{
    display: flex;
    flex-direction: column;
    .itemTop{
        display: flex;
        flex-direction: row;
        // justify-content:left;
        margin: .3rem;
        .itemImg{
            flex: 0.7;
            img{
            width: 100%;
            border-radius: 20px;
            }
        }
        .itemDescrip{
            margin-left: 0.3rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .descrpTop{
                font-size: 0.4rem;
                font-weight: 800;
            }
            .descrpMiddle{
                font-weight: 900;
            }
            .descrpBottom{
                font-size: 0.125rem;
                color: rgb(255, 255, 255);
                font-weight: 800;
            }
        }
      
    }
    .itemBottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 0.9rem;
        
    }

}

</style>
