<template>
	<div class="cont">
		<p class="SchoolQuestion"> <!-- 下拉框样式在子组件中 -->
			<span>学段</span>
			<Select></Select>
			<span>学科</span>
			<Select></Select>
			<span>分类</span>
			<Select></Select>
		</p>
		
		<QuestionBank :questions="questions"></QuestionBank>
	</div>
</template>

<script>
	import QuestionBank from "./QuestionBank"
	import Select from "./Select"

	export default{
		name:"SchoolQuestion",
		components:{QuestionBank,Select},

		data(){
			return{
				questions:[
					{type:"单选",
					question:"第三方ID双方的还是覅鲁大师师傅的说法和？.......()",
					options:"A.huhu B.haha C.haha",
					analysis:"绝大部分从的说法还是地方是的恢复速度是地方化但是速度回复速度回复结构的房交会是读后感ID后的后果石化公司手动法规和低功耗的说法和地方还是是的联合国实地返回哦的私服实地返回的i干货；if；速度回复 都是废话速度回复和地方还是是的联合国实地返回哦的私服实地返回的i干货；if；速度回复 都是废话速度回复",
					answer:"A"
					},
					{type:"问答",
					question:"下列各式中，不能用平方差公式计算的是的报复的功夫的都第三个的功夫的施工方浮点数水电费好的师傅个好地方大幅度回复is的闪电发货？.......()",
					options:"A.huhu B.haha C.haha",
					analysis:"绝大部分从的说法还是地方是的恢复速度是地方化但是速度回复速度回复结构的房交会是读后感ID后的后果石化公司手动法规和低功耗的说法和地方还是是的联合国实地返回哦的私服实地返回的i干货；if；速度回复 都是废话速度回复和地方还是是的联合国实地返回哦的私服实地返回的i干货；if；速度回复 都是废话速度回复",
					answer:"B"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.cont{
		min-height: 915px;
		width: 1140px;
		border:1px solid;
		margin: 0 auto;
		background: #fff;
		padding: 0 30px;
	}
	.cont .SchoolQuestion{
		margin: 20px 0 30px 0;
		line-height: 30px;
	}
</style>
