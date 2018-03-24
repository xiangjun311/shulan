export let getFours = function({commit},num){
       	  console.log(num)
          setTimeout(()=>{
               commit('FETCHFOURS',[{name:"建狗汽车",volvo:true}])
          },1000)
}
