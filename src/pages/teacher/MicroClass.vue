<template>
	<div class="main">
		<p class="s_nav">
			<router-link to="my">我的微课</router-link>
        	<router-link to="school">本校微课 </router-link>
		</p>
		
        <router-view></router-view>

	</div>
</template>

<script>
	export default{
		name:"MicroClass"
	}
</script>
<style type="text/css" scoped>
	.main{
		min-height: 1000px;
		background: #f2f4f5;
		overflow: hidden;
		position: relative;
	}
	.list{
		background: #fff;
	}
	.main .s_nav{
		width: 1200px;
		border: 1px solid;
		background: #fff;
		margin:  0 auto;
		margin-top: 30px;
		height: 60px;
	}

</style>