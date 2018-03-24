//props接收导航的名称为：list_childRoute,
//list_childRoute数组里面的对象里面的内容为{name:'导航名称'，path:'对应路由的路径'}。
//在Div为chacao的标签中新增了slot匿名插槽,需要使用插槽时,只需在对应调用该组件内直接写入需要增加的标签或文本即可

<template>
	<div class="list">
        <ul class="navList">
        	<li @click="changeNav(idx)" v-for="(i,idx) in list_childRoute" :key="idx" :class="{'active':idx==current}">
        		<router-link :to=i.path >{{i.name}}</router-link>
        	</li>
        </ul>
        <div class="chacao">
        	<slot></slot>
        </div>
    </div>
</template>
<script>
	export default {
		data(){
			return {
				current:0
				// list_childRoute:[
				// 	{name:"基本信息",path:"/tic"},
				// 	{name:"教材版本",path:"/tic"},
				// 	{name:"修改密码",path:"/tic"}
				// ]
			}
		},
		props:["list_childRoute"],
		methods:{
			changeNav(idx){
				this.current =  idx
			}
		}
	}
</script>
<style>
	.list{
		height: 70px;
		width: 1200px;
		margin:0 auto;
		position: relative;
	}
	.navList{
		width: 1200px;
		height:70px;
		margin: 0 auto;
		background: #fafcfc;
		border-bottom:1px solid #e7e7e7;
	}
	.navList li{
		display: inline-block;
		height: 70px;
		width: 163px;		
		text-align: center;	
		background: #fafcfc;
		float:left;
		position: relative;	
	}
	.navList li a{
		font-size: 13px;
		line-height: 70px;
		font-weight: 1000;
		color:#aaaaaa;
		display: inline-block;
		width:100%;
		height:100%;
	}

    .navList li .router-link-active{
    	background: #fff;
    	border-bottom: none;  	
		border-top:3px solid #e7e7e7;
		font-size:16px;
		font-weight: 1000;
		color:#333333;
    }
    .navList li .router-link-active::before{
    	content: "";
    	position: absolute;
    	border-left:2px solid #e7e7e7;
    	border-bottom: none;
    	height: 68px;
    	width: 26px;
    	background: #fff;
    	left:-12px;
    	transform: skewx(-20deg);
    	z-index: 9999
    }

    .navList li .router-link-active::after{
    	content: "";
    	position: absolute;
    	border-right:2px solid #e7e7e7;
    	border-bottom: none;
    	height: 68px;
    	width: 26px;
    	background: #fff;
    	left:149px;
    	transform: skewx(20deg);
    	z-index: 9999
    }

     .navList li:nth-child(1)::before{
           content: none;
           border-left:none;
	}
	.chacao{
		height:70px;
		width:290px;
		position: absolute;
		right:0;
	}
</style>
