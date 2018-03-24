<template>
	<el-select v-model="value" placeholder="请选择" @change="handlechange" >
		<el-option
			v-for="item in items"
			:key="item.value"
			:label="item.label"
			:value="item.value"
			v-model="item.label"
			>
		</el-option>
	</el-select>

	
</template>

<script>
	export default{
		name:"Option",
		data(){
			return{
				value:"",
				label:""
			}
		},
		props:{
			items:{
				type:null
			},
			type:{
				type:null
			}
		},
		methods:{
			handlechange(a){	
				console.log(a)//选项
				console.log(this.type)
				this.$emit("handle",a,this.type)

			}
		}
	}
</script>
<style>
	.information .el-input__inner{
    height: 35px !important;
    border-radius: 0;
    width: 240px;
    padding: 0 10px;
  }

  .SchoolQuestion .el-input__inner{
  	width: 120px;
  	height: 30px;
  }
</style>