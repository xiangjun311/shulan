import { INCREMENT ,FETCHFOURS,CHANGEMSG } from './mutation-types';

export default { //存放的mutation 就是用来修改state的
   	   [INCREMENT]:function(state,num){ //key 就相当于事件名，value就是回调函数
           state.count += num
   	   },
   	   [FETCHFOURS]:function(state,fours){
           state.fours = [...fours]
   	   },
   	   [CHANGEMSG](state,val){
           state.msg = val
   	   }
}