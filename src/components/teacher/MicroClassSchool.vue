<template>
	<div class="content">
		<Classdl :items="items"/>
		
		
	</div>
</template>
<script type="text/javascript">
	import Classdl from "./Class-dl"
	export default{
		name:"MicroClassSchool",
		components:{Classdl},
		data(){
			return{
				items:[
					{id:'001',img:'',title:'北师大版七年级下册第1章 同底数幂乘法',size:'12.3M',time:"12:34"},
					{id:'002',img:'',title:'北师大版七年级下册第2章 同底数幂乘法',size:'12.3M',time:"12:34"},
					{id:'003',img:'',title:'北师大版七年级下册第3章 同底数幂乘法',size:'12.3M',time:"12:34"},
					{id:'004',img:'',title:'北师大版七年级下册第4章 同底数幂乘法',size:'12.3M',time:"12:34"},
					{id:'005',img:'',title:'北师大版七年级下册第5章 同底数幂乘法',size:'12.3M',time:"12:34"}
				]
			}
		}
		

	}
</script>

