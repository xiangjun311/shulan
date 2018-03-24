<template>
   <section>
   	 <el-row type="flex" class="row-bg" justify="space-between">
	  <el-col :span="6"><el-button type="primary">周</el-button></el-col>
	  <el-col :span="6">
	      <div class="weekBox">
        	<span class="weekBtn"><i class="el-icon-arrow-left"></i></span>
        	<span>2018-2-9</span>
        	<span class="weekBtn"><i class="el-icon-arrow-right"></i></span>
           </div>
       </el-col>
	  <el-col :span="6"><el-button icon="el-icon-plus">新建</el-button></el-col>
	 </el-row>
     
     <table>
     	<thead>
     		<th colspan="1" v-for="(c,i) in classTimes">
     	 		 <div class="cell">{{c}}</div>
     	    </th>
     	</thead>
     	<tbody>
     		<tr v-for="(c,i) in classes" style="position:relative">
     			<td>{{c.week}} <br> {{c.day}}</td>
     			<td v-for="i in 8">
     			</td>
     			<div class="lessonBox" :style="{width:c.lesson.length*90 + 'px',backgroundColor:findColor(c.grade),transform:tran(c.lesson[0])}">
					<span :class="{left:c.lesson.length>1}">初三年纪一班</span>
					<span :class="{right:c.lesson.length>1}">数学</span>
				</div>

     		</tr>
     	</tbody>
     </table>
  
   </section>

</template>
<script>
	export default {
		data(){
			return {
				currentDate:new Date(),
				classTimes:[,"一","二","三","四","五","六","七","八"],
				classes:[{
					week:"周一",day:"01/08",gradeName:"初三年纪一班",course:"数学",
					lesson:[1,2],grade:8
				},{
					week:"周二",day:"01/09",gradeName:"初三年纪二班",course:"数学",
					lesson:[3,4],grade:9
				},{
					week:"周三",day:"01/10",gradeName:"初二年纪七班",course:"数学"
					,lesson:[7,8],grade:7
				},{
					week:"周四",day:"01/11",gradeName:"初三年纪一班",course:"数学",
					lesson:[5],grade:7
				},{
					week:"周五",day:"01/12",gradeName:"初一年纪一班",course:"数学",
					lesson:[4],grade:8
				}],
				colors:[{
					name:7,color:'#f083a3'
				},{
					name:8,color:'#85ce69'
				},{
					name:9,color:'#f6bd78'
				}]
			}
		},
		methods:{
			findColor(name){
				var obj = this.colors.find((value)=>{
					return value.name == name
				})
				return obj.color
			},
			tran(num){
				 return 'translateX(' + (101*(num-1)+10) + 'px)'
			}
		}
	}
</script>
<style>
     .weekBox{
        height: 40px;
     }
	.weekBtn{
		 line-height: 30px;
		 margin-top: 7px;
         display: inline-block;
         width: 30px;
         height: 30px;
         border-radius: 50%;
         border: 1px solid #e7e7e7;
	}
	table {
		border-collapse:collapse;
		box-sizing: border-box;
		border: 1px solid #ebeef5;
	}

	table td,th{
		box-sizing: border-box;
		border-bottom: 1px solid #ebeef5;
		border-right: 1px solid #ebeef5;
		font-size: 14px;
	}
	.cell{
        
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: normal;

		    height: 100px;
		    width: 100px;
		    text-align: center;
		    line-height: 100px;
	}

	table td{
		padding: 20px 0
	}
	.lessonBox {
		color: #fff;
		position: absolute;
		left: 100px;
		margin-top: 12px;
		font-size: 12px;
		width: 90px;
		padding: 10px 6px;
		height: 54px;
		box-sizing: border-box;
        background: #fff;
        border-radius: 28px;
        border: 1px solid #e7e7e7;

	}
	.lessonBox .left{
		line-height: 30px;
		float: left;
		margin-left: 12px
	}
	.lessonBox .right{
		float: right;
		line-height: 30px;
		margin-right: 12px
	}

</style>