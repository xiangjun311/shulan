<!-- 
   教师端的主页

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
        		name:"首页",path:"/teacher/index"
        	},{
        		name:"课件",path:"/teacher/index"
        	},{
        		name:"题库",path:"/teacher/question"
        	},{
        		name:"布置作业",path:"/teacher/index"
        	},{
        		name:"微课",path:"/teacher/microclass"
        	},{
        		name:"设置",path:"/teacher/set"
        	},{
        		name:"下载中心",path:"/teacher/index"
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