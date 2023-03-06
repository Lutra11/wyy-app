import { createStore } from 'vuex'
import { getLyric } from '@/request/api/item';
export default createStore({
  //全局参数
  state: {
    //播放列表默认值
    playList:[
      { 
            al:  {
              id: 93660342,
              name: "Always Afternoon",
              pic: 109951165215312980,
              picUrl: "https://p1.music.126.net/dy5Q_5KH-mW1-0-8W19EeQ==/109951165215312974.jpg",
              pic_str: "109951165215312974"
            },
            ar:{
              name:'你干嘛',
            },
            id:1469327796
      }],
      playListIndex:0,//默认下标为0
      //播放按钮
      isbtnShow:true,
      //detailShow详情页展示
      detailShow:false,
      //歌词
      lyricList:{}
  },

  //get方法
  getters: {
    
  },
  //set方法
  mutations: {
    updateisbtnShow:((state,value)=>{
      state.isbtnShow = value;
    }),
    updateisPlayList:((state,value)=>{
      state.playList = value
      console.log(state.playList);
    }),
    updateIndex:((state,value)=>{
      state.playListIndex = value
    }),
    updatedetailShow:function(state){
      state.detailShow = !state.detailShow
      console.log(state.detailShow);
    },
    updateLyricList:function (state,value){
      state.lyricList = value;
    }
  },
  //异步操作
  actions: {
     getLyric:async function(context,value){
      let res = await getLyric(value);
      console.log(res);
      context.commit('updateLyricList',res.data.lrc)
    }
  },
  modules: {
  }
})
