import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';

Vue.use(Vuex);

//创建仓库

var store = new Vuex.Store({
	//strict: true,
	modules:{ //是modules   
		user
	}
   //state：单一状态，是一个普通的对象，用来存放仓库的数据的
    

})


export default store 