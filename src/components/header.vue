<!--props接收导航的名称为：list,list数组里面的对象里面的内容为
{name:'导航名称'，path:'对应路由的路径'}。
props接收学校类型的名称为：msg, -->
<template>
	<div class='header'>
					<div class="first-nav">
						<div class="logo">
							<img src="../assets/img/logo.jpg"/>
							<p>数懒云服务</p>
						</div>
						<div class="school">
							<p>{{msg}}</p>
						</div>
						<div class="message">
							<img src="../assets/img/m1.png"/>					
							<p @click='handclick'>{{usename}} <img  src='../assets/img/sanjiao.jpg'></img></p>
							<div class='xinxi' v-show='show' >
								<p v-for='(me,index) in mess' @click="handlecle(index)" :class="{'mes':index==current}">{{me}}</p>							
							</div>
						</div>

						<ul class='ul'>
							<li v-for='(i,idx) in list' :key='idx'>
								<router-link :to=i.path >{{i.name}}</router-link>
							</li>
						</ul>
						</div>
				</div>
</template>

<script>
	export default {
		data(){
			return {
				    current:0,
					size:14,
					usename:'张宇',
					show:false,
					mess:['个人资料','退出登录']
			}
		},
		props:['list',"msg"],
		methods:{				
				handlecle(index){
					this.current=index;			
				},
				handclick(){
					this.show=!this.show
				}
		}
	}
	
</script>

<style>
	*{margin: 0;padding: 0;}
	.header{
		width: 100%;
		height: 66px;
		background: #457d66;
		}
	.first-nav{
		width: 1200px;
		height: 66px;
		margin: 0 auto;		
	}
	.logo{
		width: 143px;
		height: 66px;
		float: left;
	}
	.school{
		width: 141px;
		height: 66px;
		float: left;
		
	}
	.header>.first-nav>.ul{
		margin-right: 20px;
		height: 66px;
		float: right;		
	}
	.header>.first-nav>.ul>li{
		list-style: none;
		float: left;		
		height: 66px;
		line-height: 66px;
		font-size: 14px;
		width: 80px;
		text-align: center;
	}
	.header>.first-nav>.ul>li>a{
		text-decoration: none;
		font-size: 14px;
		color: white;
	}
	.message{
		width: 122px;
		height: 66px;
		float: right;
		position: relative;	
		z-index: 999;	
	}
	.router-link-active{
		font-size: 18px;
		border-bottom: 3px solid white;
		border-bottom-right-radius: 1.5px;
		border-bottom-left-radius: 1.5px;
		border-top-right-radius: 1.5px;
		border-top-left-radius: 1.5px;		
	}
	.logo>img{
		margin-top: 16px;
		float: left;
	}
	.logo>p{
		float: left;
		text-align: center;
		height: 66px;
		line-height: 66px;
		width: 110px;
		font-size: 18px;
		color: white;
	}
	.school>p{
		margin-top: 26px;
		height: 15px;
		line-height: 15px;
		border-left: 1px solid white;
		color: white;
		font-size: 14px;
		width: 141px;
		text-align: center;
	}
	.message>img{
		width: 36px;
		height: 36px;
		border-radius: 50%;
		margin-top: 15px;
		float: left;
	}
	.message>p{
		float: left;
		height: 66px;
		line-height: 66px;
		padding-left: 10px;
		color: white;
		cursor: pointer;
	}
	.message>.xinxi{
		width: 110px;
		height: 76px;
		position: absolute;
		top: 77px;
		left: -13px;
		box-shadow: 0px 0px 10px #cccccc;
		
	}
	.message>.xinxi>p{
		line-height: 38px;
		text-align: center;
		width: 110px;
		height: 38px;
		font-size: 14px;
		background: white;
		color: #457d66;
		
	}
	.message>.xinxi>.mes{
		background: #68bd8b;
		color: white;
	}
</style>