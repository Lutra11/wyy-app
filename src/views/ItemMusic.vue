<!--  -->
<template>
    <!-- 父组件传参给子组件 -->
    <div class="item">
        <ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
        <ItemMusicBackground :playlist="state.playlist"></ItemMusicBackground>
        <itemMusicList :musicList="state.musicList" :subscribedCount="state.playlist.subscribedCount"></itemMusicList>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { useRoute } from 'vue-router';
import { onMounted,reactive } from 'vue';
import { getItemMusic, getMusicList} from '@/request/api/item.js'

//引入子组件
import ItemMusicTop from '@/components/item/itemMusicTop.vue'
import ItemMusicBackground from '@/components/item/itemMusicBackground.vue'
import itemMusicList from '@/components/item/itemMusicList.vue'



export default {
setup(){
    const state = reactive({
        //歌单页面
        playlist:{},
        //歌曲详情
        musicList:{}
    });

    onMounted(async()=>{
        let id = useRoute().query.id
        console.log(useRoute().query.id);
        //获取歌单页面
        let res = await getItemMusic(id);
        // console.log(res);
        state.playlist = res.data.playlist

        //获取歌单数据
        let result = await getMusicList(id);
        console.log(result);
        state.musicList = result.data.songs
        // console.log(state.musicList);

        //防止页面刷新数据丢失 数据本地存储 seesionstorge
        sessionStorage.setItem('itemDetail',JSON.stringify(state))
    })
    return {state}
},

components: {
    ItemMusicTop,
    ItemMusicBackground,
    itemMusicList
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

</style>