<template>
  <!-- 路由占位符 -->
  <router-view/>
  <!--底部音乐播放  -->
  <FooterMusic/>

</template>
<script>
import FooterMusic from '@/components/item/FooterMusic.vue';

export default{

  data(){
    return{

    }
  },
  components:{
    FooterMusic
  },
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: rgb(236, 236, 236);
  // height: 20000px;
}



</style>
