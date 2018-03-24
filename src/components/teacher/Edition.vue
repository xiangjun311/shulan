<template>
	<div class="main">

		<div class="cont">
			<p>
				<span>班级</span>
				<input type="text" v-model="calzz">
			</p>
			<p>
				<span>教材版本</span>
				<input type="text" v-model="versions">
			</p>
			<p>
				<button class="btn">保存</button>
			</p>
		</div>

	</div>
</template>

<script type="text/javascript">
	export default{
		name:"Edition",
		data(){
			return{
				calzz:"智慧一班",
				versions:"人教版"
			}
		}
	}
</script>

<style type="text/css" scoped>
	p{
		/*width: 1200px;*/
		/*border: 1px solid red;*/
		text-align: left;
		margin-top: 20px;
	}
	.cont{
		width: 1100px;
		height: 672px;
		margin: 0 auto;
		padding: 0 50px;
		background: #fff;

	}
	.cont p span{
		/*float: left;*/
		display: inline-block;
  		width: 100px;
  		/*border: 1px solid;*/
  		text-align: right;
  		margin-right: 20px;
  		font-size: 15px;
  		height: 35px;
  		line-height: 35px;
	}
	.cont p input{
		height: 33px;
	}

	.cont p .btn{
		margin-left: 125px;
		width: 100px;
		height: 35px;
		border: 0;
		background: #68bd8b;
		color: #fff;
	}

</style>