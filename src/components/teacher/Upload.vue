<template>
<div class="b_bg">
	<div class="bg">
	</div>
	<div class="form">
		<p class="b_title">
			<span class="up">上传微课</span>
			<span 
			class="close el-icon-close" 
			@click="close"
			></span>
		</p>
		<hr>
		<!-- 表单 -->
		<form>
		<p>
			<span class="title">课件名称</span>
			<input type="text" v-model="name">			
		</p>
		<p class="sm">
			<span class="title">学段</span>
			<Select v-bind:items="options" type="xd" @handle="handleValue"/>
			<span>科目</span>
			<Select v-bind:items="subjects" type="km" @handle="handleValue"/>
			<span>教材版本</span>
			<Select v-bind:items="versions" type="jc" @handle="handleValue"/>
		</p>
		<p>
			<span class="title">选择章节</span>
			<!-- <Select :items="options"/> -->
			<el-select
			v-model="value10"
			multiple
			filterable
			allow-create
			default-first-option
			placeholder="请选择章节">
			<el-option
			v-for="item in options5"
			:key="item.value"
			:label="item.label"
			:value="item.value">
			</el-option>
			</el-select>
		</p>
		<p>
			<span class="title">知识点</span>
			<el-select
				v-model="value11"
				multiple
				filterable
				allow-create
				default-first-option
				placeholder="请选择知识点">
				<el-option
					v-for="item in options6"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</p>
		<p>
			<span class="title">微课选择</span>
			<el-upload
			  class="upload-demo"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :before-remove="beforeRemove"
			  multiple
			  :limit="3"
			  :on-exceed="handleExceed"
			  :file-list="fileList">
			  <el-button size="small" type="primary">点击上传</el-button>
			  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
			
		</p>
		<p>
			<button @click="close">取消</button>
			<button @click.prevent="upload">确定</button>
		</p>

	

		
		</form>
	</div>
</div>
</template>

<script>
	import Select from "./Select"
	export default{
		name:"Upload",
		data(){
			return{
				show:1,
				name:"",
				 fileList:[
				 	{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
				],
     			
				options: [
					{value: '选项1',label: '小学'},
			        {value: '选项2',label: '初中'}, 
			        {value: '选项3',label: '高中'}, 
			        {value: '选项4',label: '大学'}
		        ],
		        subjects: [
					{value: '选项01',label: '数学'},
			        {value: '选项02',label: '语文'}, 
			        {value: '选项03',label: '英语'}, 
			        {value: '选项04',label: '物理'},
			        {value: '选项05',label: '化学'},
			        {value: '选项06',label: '生物'},
		        ],
		        versions:[
		        	{value: '001',label: '北师大版'},
		        	{value: '002',label: '东师大版'},
		        	{value: '003',label: '南师大版'},
		        	{value: '004',label: '西师大版'},
		        ],
		        options5: [{
		          value: 'HTML',
		          label: 'HTML'
		        }, {
		          value: 'CSS',
		          label: 'CSS'
		        }, {
		          value: 'JavaScript',
		          label: 'JavaScript'
		        }],
		        options6: [{
		          value: 'HTML',
		          label: 'HTML'
		        }, {
		          value: 'CSS',
		          label: 'CSS'
		        }, {
		          value: 'JavaScript',
		          label: 'JS'
		        }],
		        value10: [],//学段
		        value11: []//学龄
			}
		},
		methods:{
			close(){
				//触发el-ui的父组件Select自定义事件，改变显示状态
				this.$emit("upload")
			},
			handleValue(va,type){//通过自定义事件触发，获取属性值
				console.log(va)
				console.log("type:"+type)
				this.value=va
				if (type=="xd") {
					this.xueduan = va
				}else if(type=="km"){
					this.kemu = va
				}else if(type=="jc"){
					this.jiaocai = va
				}
			},
			
			upload(){//点击确定上传表单数据
				var name = this.name//获取课件名称
				var xueduan = this.xueduan//获取学段
				var kemu = this.kemu//获取科目
				var jiaocai = this.jiaocai//获取教材版本
				var zhangjie = this.value10//获取章节
				var zhishi = this.value11//获取知识点
				if (!name || !xueduan || !kemu || !jiaocai) {
					alert("不能为空！")
					return
				}
				console.log(name,xueduan,kemu,jiaocai,zhangjie,zhishi)
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
			},
			beforeRemove(file, fileList) {
				console.log(this)
				return confirm(`确定移除 ${ file.name }？`);
			}

		},
		components:{Select}
	}
</script>
<style type="text/css" scoped>
.example-multiple label.btn {
margin-bottom: 0;
margin-right: 1rem;
}
.example-multiple .upload {
margin-bottom: 1rem;
}
	.bg{
		width:100%;
		height:1200px;
		background:#000;
		opacity: 0.5;
		position: absolute;
		top:0;
		
	}
	.form{
		width: 760px;
		height: 560px;
		border-radius: 5px ;
		position: absolute;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 1;
		background: #fff;
		padding: 10px 20px;
	}
	.form .b_title{
		width: 740px;
		height: 55px;
		line-height: 55px;
		padding-left: 15px;
		font-weight: 600;
	}
	.form .up{
		float: left;
	}
	.form .close{
		float: right;
		line-height: 55px;
		font-size: 18px;
	}
	.form form{
		padding-left: 15px;
	}
	.form form p{
		text-align: left;
		margin-top:25px; 
	}
	.form form p .title{
		font-size: 14px;
		display: inline-block;
		width: 56px;
		text-align: right;
		margin-right: 10px;
	}
	.form form p input,select{
		height: 32px;
		width: 415px;
		border: 0;
		border: 1px solid #bcc4ca;
	}
	.form form .sm .el-select,.form form .sm .el-select input{
		width: 160px;
	}
	
</style>
