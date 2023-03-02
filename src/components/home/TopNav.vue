<!--  -->
<template>
    <div class='topNav'>

        <div class="TopMenu">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xitongcaidan"></use>
            </svg>
        </div>

        <div class="TopContent">
            <span v-for="(content) in ContentLists" :key="content.id" class="active">{{content.title}}</span>
        </div>

        <div class="TopSearch">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
        
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    ContentLists:[
        {
         id:1,
         title:"我的"   
        },
        {
         id:2,
         title:"发现"   
        },
        {
         id:3,
         title:"云村"   
        },
        {
         id:4,
         title:"视频"   
        },
    ]
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
beforeCreate() {
    
}, //生命周期 - 创建之前
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
  width: .5rem;
  height: .5rem;
}
.topNav{
    display: flex;
    height:.75rem;
    width: 100%;
    padding: 0.1375rem;
    flex-direction: row;
    // line-height: .75rem;
    justify-content: space-between;
    text-align: center;
}
.TopContent{
    width: 54%;
    height: .75rem;
    display: flex;
    justify-content: space-between;
    // margin-top: 0.0375rem;
    user-select: none;
    font-size: 0.35rem;
    .active{
        font-weight: 800;
    }
}

</style>