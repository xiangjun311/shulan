<template>
  <div id="app">
    <router-view/>
    <!-- <Upload/> -->
  </div>
</template>

<script>
import Upload from "@/components/teacher/Upload"
export default {
  name: 'App',
  components:{ Upload},
}
</script>

<style>
*{
  padding: 0;
  margin:0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-pager li.active{
    background: #68bd8b !important;
    color: #fff !important;
    width: 21px !important;
    height: 28px;
    border: 1px solid #b3d1f3;
  }
.el-pager{
    margin-right: 50px;
  }
  .el-input__inner{
    /*height: 35px !important;*/
    border-radius: 0;
    /*width: 240px;*/
    padding: 0 10px;
  }


</style>
