<template>
	<div class="teacher">
		<dl v-for="(i,index) in list" :key="index">
			<dt :style="{ background:i.background1}">
				<i></i>
			</dt>
			<dd :style="{background:i.background2 }">{{i.name}}</dd>
		</dl>
	</div>
</template>

<script>
	export default{
		name:"Teacher",
		data(){
			return{
				list:[
					{name:"课件",background1: "linear-gradient(#f8cb3c, #f8db6f)",background2:"#f8cb3d"},
					{name:"课堂预习",background1: "linear-gradient(#a366e0, #a78ce0)",background2:"#a367e0"},
					{name:"题库",background1: "linear-gradient(#51cee3, #82dee3)",background2:"#52cee3"},
					{name:"布置作业",background1: "linear-gradient(#f08076, #efa98e)",background2:"#f08177"},
					{name:"微课",background1: "linear-gradient(#58ce89, #79d4a4)",background2:"#5fc589"},
					{name:"班级错题本",background1: "linear-gradient(#5079e5, #789aec)",background2:"#567ee6"},
					{name:"统计分析",background1: "linear-gradient(#f29e3d, #f5b66e)",background2:"#f2a143"},
					{name:"设置",background1: "linear-gradient(#f8cb3c, #f8db6f)",background2:"#f8cb3d"}

				]
			}
		}
	}
</script>

<style scoped>
	*{
		margin:0;padding:0;
	}
	.teacher{
		width:1200px;
		height:906px;
		margin:0 auto;
	}
	dl{
		width:187px;
		height:221px;
		float:left;
		margin-left:40px;
		margin-top:45px;
		box-shadow: 3px 3px 10px #cccccc;
	}
	dt{
		width:187px;
		height:161px;
		/*background: linear-gradient(#f8cb3c, #f8db6f)*/
	}
	dd{
		width:187px;
		height:61px;
		color:white;
		text-align: center;
		line-height: 61px;
		font-weight: 600;
		/*background: #f8cb3d*/
	}
</style>