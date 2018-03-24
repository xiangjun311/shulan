<template>
	<div class="content">
		<p class="upload" @click="upload"> + 上传</p>
		  
		<Classdl :items="items"/>

		<Upload v-if="show" @upload="upload"/>
	</div>
</template>
<script type="text/javascript">
	import Classdl from "./Class-dl"
	import Upload from "./Upload"
	export default{
		name:"MicroClassMy",
		components:{Classdl,Upload},
		data(){
			return{
				items:[
						{id:'001',img:'',title:'北师大版七年级下册第1章 同底数幂乘法',size:'12.3M',time:"12:34"},
						{id:'002',img:'',title:'北师大版七年级下册第2章 同底数幂乘法',size:'12.3M',time:"12:34"},
						{id:'003',img:'',title:'北师大版七年级下册第3章 同底数幂乘法',size:'12.3M',time:"12:34"}
					],
					show:0
			}
		},
		methods:{
			upload(e){
				// console.log("上传")
				this.show=!this.show
				// e.path[4].children[1].style.cssText="display:block"
			},
			openFullScreen() {
        	this.fullscreenLoading = true;
        
    },
			
		}
	}
</script>

<style scoped>
	.upload{
		position: absolute;
		top: 43px;
		right: 62px;
		width: 80px;
		height: 34px;
		border: 0;
		border: 1px solid #68bd8b;
		text-align: center;
		line-height: 34px;
		color: #68bd8b;
		cursor: pointer;
	}
</style>