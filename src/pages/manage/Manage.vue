<!-- 
   管理端的主页

 -->

<template>
	<section>
        <Header :list="list"/>
		 <router-view></router-view>
		<Footer />
	</section>
</template>

<script>
    
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue'
	export default {
      data(){
        return {
        	list:[{
        		//修改成自己的跳转的路由
        		name:"首页",path:"/manage/index"
        	},{
        		name:"课件",path:"/manage/index"
        	},{
        		name:"微课",path:"/manage/index"
        	},{
        		name:"题库",path:"/manage/index"
        	},{
        		name:"统计",path:"/manage/index"
        	},{
        		name:"设置",path:"/manage/index"
        	},{
        		name:"下载中心",path:"/manage/index"
        	}]
        }
      },
      computed:{

      },
      components:{
      	Header,Footer
      }
	}
</script>

<style>
	
</style>