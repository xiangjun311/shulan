import mutations from './mutations';
import * as actions from './actions'
import * as getters from './getters';



var state = {
   	   count:2,
   	   msg:"今天不上晚自习",
   	   fours:[]
}

export default {
    mutations,
    state,
    getters,
    actions
}