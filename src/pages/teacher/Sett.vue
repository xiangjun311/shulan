<template>
	<div class="main">
		<p class="s_nav">
			<router-link to="information">基本信息</router-link>
        	<router-link to="edition">教材版本 </router-link>
        	<router-link to="changepwd">修改密码 </router-link>
		</p>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"Set"
	}
</script>

<style scoped>
	.main{
		min-height: 782px;
		background: #f2f4f5;
	}
</style>
