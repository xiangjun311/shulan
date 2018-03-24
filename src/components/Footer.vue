<template>
	<div class="footer">
		<div class="footer_main">
			<p class="p1">版权所有@成都树懒信息技术有限公司 蜀ICP 备17030631号</p>
			<p class="p2">合作热线:028-65217665</p>
			<img class="QQLogo" src="../assets/img/1.gif">
			<img class="WXLogo" src="../assets/img/2.gif">
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"Footer"
	}
</script>

<style scoped>
	*{
		margin:0;padding:0;
	}
	.footer{
		width:100%;
		height:60px;
		background:#51585c;
	}
	.footer_main{
		width:1200px;
		height:60px;
		margin:0 auto;
	}
	p{
		float:left;
		color:#c0cbcd;
		font-size:14px;
		line-height:60px;
	}
	.p2{
		margin-left:450px;
		font-size:16px;
	}
	.QQLogo,.WXLogo{
		float:left;
		margin-top:14px;
		margin-left:23px;
	}
</style>