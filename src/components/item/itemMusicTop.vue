<!--  -->
<template>
    
<div class='itemMusciTop'>
    <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)" >
            <use xlink:href="#icon-fanhui"></use>
        </svg>
        <span>歌单</span>
    </div>
    <div class="itemRight">
        <span class="search">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </span>
        <span class="menu">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xitongcaidan"></use>
            </svg>
        </span>
    </div>
    

    
</div>
</template>

<script>
//从父组件ItemMusic中获取数据

export default {
    setup(props){
        if((props.playlist="")){
            //  console.log(props);
             props.playlist= JSON.parse(sessionStorage.getItem().playlist)
        } 
        
    },
    props:['playlist'],

components: {

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
  width: .6rem;
  height: .6rem;
}
.itemMusciTop{
    .backgroundImg{
        position: absolute;
        width: 100%;
        height: 600px;
    }
    position: relative;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .itemLeft{
        font-size: 0.4rem;
        position: relative;
        span{
            position: absolute;
            width: 0.9rem;
            left: 160%;
            top: 10%;
            font-weight: 600;
            // color: rgb(175, 175, 175);
        }
        
    }
    .itemRight{
        display: flex;
        span{
            margin: 0 8px;
        }
    }
}

</style>