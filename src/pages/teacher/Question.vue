<template>
	<div class="main">
		<p class="s_nav">
			<router-link to="myquestion">我的题库</router-link>
        	<router-link to="schoolquestion">本校题库</router-link>
        	<router-link to="yunquestion">云题库</router-link>
		</p>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"Question"
	}
</script>

<style scoped>
	.main{
		min-height: 782px;
		background: #f2f4f5;
	}
</style>
