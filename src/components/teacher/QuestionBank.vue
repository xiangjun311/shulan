<template>
	<div class="list">
		<div class="section" v-for="(question,index) in questions">
		<div class="top">
		<span>{{index+1}}</span>
			<span class="type">{{question.type}}</span>
			<p>{{question.question}}</p>
			<p>{{question.options}}</p>
		</div>
			
		<div :class="{center,border:index!=border||b}">
			<span>年级：七年级</span>
			<span>科目：数学</span>
			<span>难度XXX</span>
			<span 
			:class="{answer:true,show:index==show}" 
			@mouseover="analysisIn(index,$event)" 
			@mouseout="analysisOut">
			答案解析</span>
			<span 
			:class="{answer:true,show:index==show}" 
			@mouseover ="answerIn(index,$event)" 
			@mouseout="answerOut">
			答案</span>
		</div>
		<div class="bottom" v-show="analysisShow==index||answerShow==index">
			<p v-show="analysisShow==index">{{question.analysis}} </p>
			<p v-show="answerShow==index">{{question.answer}} </p>
		</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:"QuestionBank",
		data(){
			return{
				b:1,//默认下边框显示
				center:1,
				border:-1,//添加类名是否显示下边框
				analysisShow:-1,//显示答案解析
				answerShow:-1,//显示答案
				show:-1//添加类名，显示蓝色边框
			}
		},
		props:{
			questions:{
				type:null
			}
		},
		methods:{
			analysisIn(index,e){//鼠标移入显示答案解析 
				e.target.style.border="1px solid #68bd8b"
				e.target.style.borderBottom="1px solid #fff"
				this.analysisShow = index
				this.show = index
				this.border = index//下边框不显示
				this.b = 0//下边框不显示
			},
			analysisOut(e){//鼠标移除隐藏
				e.target.style.border="0"
				this.analysisShow = -1
				this.border = -1
				this.show = -1
				this.b= 1

			},
			answerIn(index,e){//鼠标移入显示答案
				e.target.style.border="1px solid #68bd8b"
				e.target.style.borderBottom="1px solid #fff" 
				this.answerShow = index
				this.show = index
				this.border = index
				this.b = 0

			},
			answerOut(e){//鼠标移除隐藏
				e.target.style.border="0"
				this.answerShow = -1
				this.border = -1
				this.show = -1
				this.b= 1
			}
		}
	}
</script>

<style scoped>
	/*.show{
		border: 1px solid #68bd8b;
		border-bottom-color: #fff;
	}*/
	.list .section{
		/*width: 1140px;*/
		/*border: 1px solid #d9e6ec;*/
		background: #fafcfc;
		margin-top:20px;
	}
	.list .section .top{
		border: 1px solid #d9e6ec;
		padding: 0 30px;

	}
	.list .section p{
		text-align: left;
		width: 800px;
		/*border: 1px solid red;*/
		line-height: 38px;
	}

	.list .section .center{
		height: 60px;
		text-align: left;
		line-height: 60px;
		padding: 0 30px;
		border-left: 1px solid #d9e6ec;
		border-right: 1px solid #d9e6ec;
		/*border-bottom: 1px solid #d9e6ec;*/
	}

	.list .section .center .answer{
		display: inline-block;
		height:59px;
		cursor: pointer;
	}
	.list .section .border{
		border-bottom: 1px solid #d9e6ec;

	}
	/*.list .section .center .answer:hover{
		border: 1px solid #68bd8b;
		border-bottom-color: #fff;

	}*/
	.list .section .bottom{
		padding:30px;
		text-align: center;
		/*height: 120px;*/
		border: 1px solid #68bd8b;
	}
	.list .section .bottom p{
		/*height: 25px;*/
		line-height: 20px;
		color: #ccc;
		font-size: 14px;
	}
</style>