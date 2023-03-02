import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant组件库
import getVant from './plugins'

//懒加载注册
import { Lazyload } from 'vant';



// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
//调用懒加载组件
app.use(Lazyload);
//调用vant组件库
getVant(app);
app.use(store)
app.use(router).mount('#app')

