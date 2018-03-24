<template>
	<div class="cont">
		<QuestionBank :questions="questions"></QuestionBank>
	</div>
</template>


<script type="text/javascript">
	import QuestionBank from "./QuestionBank"
	export default{
		name:"MyQuestionBank",
		components:{QuestionBank},
		data(){
			return{
				questions:[
					{type:"单选",
					question:"下列各式中，不能用平方差公式计算的是？.......()",
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
</style>
