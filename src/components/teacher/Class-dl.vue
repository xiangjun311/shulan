<template>
	<div class="list">
			<dl v-for="item in items">
				<p class="kejian">课件</p>
				<dt><img src="@/assets/img/icon01.png"></dt>
				<dd>
					<b>{{item.title}}</b>
					<p>
						<span>{{item.size}}</span>
						<span>{{item.time}}</span>
					</p>
				</dd>
				<dd class="link"> 
					<a href="" class="el-icon-download"></a>
					<a href="" class="el-icon-share"></a>
					<a href="" class="el-icon-delete"></a>
				</dd>
			</dl>
		
			<div class="pages">
				<p>每页显示 
				<input 
				type="text" 
				value="1" 
				v-model="val" 
				@blur.prevent="handleSizeChange(val,$event)"
				

				> 项</p>
				<el-pagination
					
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"	
					:page-size="size"					
					layout=" pager, jumper"
					:total="total">
					<!--page-size  每页显示条目个数 
						page-sizes  每页显示个数选择器的选项设置
						current-page	当前页数，支持 .sync 修饰符
						total	总条目数
					-->
				</el-pagination>
				<span class="prev" @click="handleCurrentPrev">上一页</span>
				<span class="next" @click="handleCurrentNext">下一页</span>
				
			</div>
		</div>
</template>

<script type="text/javascript">

	export default{
		name:"Classdl",
		props:{
			items:{
				type:null
			}
		},
		
		methods: {
			handleSizeChange(val,e) {
				console.log(e.target.value)
				console.log(`每页 ${val} 条`);
				//控制每页显示条数
				this.size=Number(val);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				//跟踪当前页码
				this.currentPage=val;
				localStorage.page= val;
				this.vals = val
				//根据页码发起请求
				setTimeout(()=>{
					console.log("模拟请求第"+this.vals+"页数据")
				},2000)
				// axios.post("/api/jsd",{}).then(function(){

				// })

			},
			handleCurrentPrev(){
				if(this.currentPage>1){
					this.currentPage-=1;
				}
			},
			handleCurrentNext(){
				var page = Math.ceil(this.total/this.size)
				// console.log(page)
				if(this.currentPage<page){
					this.currentPage+=1;
				}
			}


		},
		data() {
			var page = Number(localStorage.page)
			return {

				page:1,
				currentPage: page,//当前页
				val:5,//初始默认为每页显示5
				size:5,//每页显示条数 ，可触发修改
				total:20//总条数,
				,
				vals:null
			};
		}
	}
</script>

<style scoped>
	.content{
		border: 1px solid red;
	}
	.content .list{
		/*border: 1px solid;*/
		width: 1200px;
		margin: 0 auto;
		padding: 10px 30px;
	}
	.content .list dl{
		width: 1200px;
		height: 165px;
		border: 1px solid #d9e6ec;
		border-bottom: 0;
		margin: 0 auto;
		background: #fafcfc;
	}
	.content .list dl:last-of-type{
		border-bottom:1px solid #d9e6ec;
	}
	.content .list dl .kejian{
		width: 50px;
		height: 25px;
		line-height: 25px;
		background: #b46cff;
		color: #fff;
		text-align: center;
	}

	.content .list dl dt,dd{
		float: left;
		padding: 20px 0 0 20px;

	}

	.content .list dl dt img{
		width: 160px;
		height: 100px;
		/*border: 1px solid red;*/
	}
	.content .list dl dd{
		/*border: 1px solid red;*/
		width: 400px;
		height: 100px;
		text-align: left;
	}
	.content .list dl dd b{
		line-height: 60px;
	}
	.content .list dl dd p span{
		margin-right: 55px;
	}
	.content .list dl .link{
		float: right;
		text-align: right;
		line-height: 100px;
		padding-right: 30px;
	}
	.content .list dl .link a{
		border-radius: 50%;
		background: #ebf5f5;
		width: 45px;
		height: 45px;
		text-align: center;
		line-height: 45px;
		color: #94d1b0;
		margin: 0 7px;
	}
	.content .list dl .link a:hover{
		color: #fff;
	}
	.content .list dl .link a:nth-child(1):hover{
		background: #5f85e7;
	}
	.content .list dl .link a:nth-child(2):hover{
		background: #f2d24d;
	}
	.content .list dl .link a:nth-child(3):hover{
		background: #f39163;
	}

	.content .list .pages{
		height: 45px;
		/*background: #d3f5f5;*/
		padding-top:20px;
		margin: auto auto;
		position: relative;
	}
	.content .list .pages p{
		float: left;
	}
	.content .list .pages p input{
		width: 32px;
		height: 24px;
		border: 1px solid #a2bdad;
		text-align: center;
	} 
	.content .list .pages span{
		cursor: pointer;
		position: absolute;
		width: 45px;
		/*border: 1px solid;*/
		font-size: 14px;
	}
	.content .list .pages .prev{
		
		top:25px;
		right: 340px;

	}
	.content .list .pages .next{
		
		top:25px;
		right: 120px;
	}
	.el-pagination{
		float: right;
	}

</style>