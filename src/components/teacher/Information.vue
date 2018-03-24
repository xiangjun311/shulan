<template>
	<div class="form">
		<form class="information">
			<p class="row">
				<span>头像</span>
				<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</p>
			<p class="row">
				<span>昵称</span>
				<input 
				type="text" 
				class="txt" 
				v-model="name"
				>
			</p>
			<p class="row">
				<span>学段</span>
				<Select :items="options" @handle="newdata" type="xd"></Select>		
			</p>
			<p class="row">
				<span>学龄</span>
				<Select :items="options1" @handle="newdata" type="xl"></Select>		
			</p>
			<p class="row">
				<span>标签</span>
				<ul>
					<li class="list" v-for="(item,index) in biaoq">
						{{item}}
						<i 
						class="el-icon-close" 
						@click="del(index)"
						></i>
					</li>
				</ul>
			</p>
			<p class="list col add" @click="add">添加标签</p>
			<p class="row">
				<span>个人说明</span>
				<textarea v-model="explain"></textarea>
			</p>

			<p class="row bt">
				<button class="close btn" @click.prevent="close">取消</button>
				<button class="col btn" @click.prevent="sub">保存</button>
			</p>
		</form>
	</div>
</template>

<script>
 	import Select from "./select"
	export default{
		name:"Information",
		components:{Select},
		data() {
			return {
				imageUrl: '',
				name:"南山南",
				xueduan:"",
				xueling:"",
				explain:"",
				options: [{
					value: '选项1',
					label: '小学'
					}, {
					value: '选项2',
					label: '初中'
					}, {
					value: '选项3',
					label: '高中'
					}, {
					value: '选项4',
					label: '大学'
					}
				],
				options1: [{
					value: '选项01',
					label: '10'
					}, {
					value: '选项02',
					label: '12'
					}, {
					value: '选项03',
					label: '13'
					}, {
					value: '选项04',
					label: '14'
					}
				],
				biaoq:["经验丰富","耐心细2","耐心细3","耐心细4","耐心细5","耐心细6","耐心细7"]
			}
		},
		methods: {
			handleAvatarSuccess(res, file) {
				console.log(file.raw)
			this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
				this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
				this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			add(){//添加标签
				console.log("add")
			},
			sub(e){//保存
				console.log(e.path[3])
				var img = this.imageUrl;//获取头像地址
				var name = this.name;//获取昵称

				var xueduan = this.xueduan//获取学段
				var xueling = this.xueling//获取学龄
				var explain = this.explain//获取个人说明
				console.log("img:"+img,"name:"+name,"个人说明："+explain)
				console.log(xueduan)
				console.log(xueling)
			},
			close(){//取消
				console.log("close")
			},
			del(index){//删除标签
				console.log(index)
				this.biaoq.splice(index,1)
			},
			newdata(a,type){//自定义事件接收数据
				console.log(a)
				console.log("type:"+type)
				if (type=="xd") {
					this.xueduan = a
				}else if(type=="xl"){
					this.xueling = a
				}
			}
		}
	}
</script>

<style scoped>
	li{
		list-style: none;
	}
	.form{
  	width: 1200px;
  	/*border: 1px solid;*/
  	margin: 0 auto;
  	height: 735px;
  	padding: 10px;
  	}
  	.form .row{
  		/*border: 1px solid red;*/
  		text-align: left;
  		margin-top: 20px;
  		width: 645px;
  		overflow: hidden;
  	}

  	.form .row span{
  		float: left;
  		width: 100px;
  		/*border: 1px solid;*/
  		text-align: right;
  		margin-right: 20px;
  		font-size: 15px;
  		height: 35px;
  		line-height: 35px;
  	}
  	.form .row .txt{
  		height: 35px;
  		width: 220px;
  		padding: 0 10px;
  		border: 0;
  		border: 1px solid #e6e7ed;
  	}
  	.form .row ul{
  		width: 525px;
  		/*border: 1px solid;*/
  		/*background: #383838;*/
  		display: inline-block;
  		float: right;
  	}
  	.form .add,.bt{
  		display: block;
  		margin-left: 120px;
  		
  	}
	.list{
		width: 75px;
		height: 35px;
		display: inline-block;
		background: #efefef;
		margin: 0 20px 10px 0;
		padding-left: 10px;
		text-align: left;
		line-height: 35px;
		font-size: 14px;
	}
	.list i{
		/*background: #f8f838;*/
		cursor:pointer;
	}
	.col{
		background: #68bd8b;
		color: #fff;
	}
	.btn{
		border: 0;
		width: 100px;
		height: 35px;
	}
	.col,.btn{
		cursor: pointer;
	}
	
	textarea{
		resize: none;
		width: 498px;
		height: 120px;
	}

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #e6e7ed;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
  .el-input__inner{
    height: 35px !important;
    border-radius: 0;
    width: 240px;
    padding: 0 10px;
  }

  
</style>