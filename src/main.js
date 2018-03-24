import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex';
import { Button, Select,Row,Col,Table ,Pagination,Upload,Option,Input} from 'element-ui';

// import './assets/element-variables.scss' //全局主题修改文件

Vue.config.productionTip = false

Vue.use(Button) //使用那个组件就导入，查表得到
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(Upload)
Vue.use(Option)
Vue.use(Select)
Vue.use(Input)
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
