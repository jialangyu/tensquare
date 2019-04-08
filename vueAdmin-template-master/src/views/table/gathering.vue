<template>
     <el-table :data="list" style="width: 100%">
         <el-table-column prop="id" label="活动ID" width="180"></el-table-column>
         <el-table-column prop="name" label="活动名称" width="180"></el-table-column>
         <el-table-column prop="address" label="活动地址" ></el-table-column>
    </el-table>
</template>

<script>
//引入api接口
import gatheringApi from "@/api/gathering"

export default {
  //data: 交互的数据,页面展示的数据,和后端交互的数据,js对象
  data() {
    return {
      list:null
    }
  },
  //created: 钩子函数,页面初始化的时候调用的js方法
  created() {
    this.fetchData()
  },
  //methods: 定义全部的js方法
  methods: {
      //调用api接口,查询活动列表数据
    fetchData() {
        //response: 请求之后的所有响应数据
       // console.log(111111111111111111)
        gatheringApi.getList().then( response => {
          console.log('=============')
             console.log(response) 
             console.log('=============')  
            this.list = response.data; //获取列表数据
        }).catch(err=>{})
    }  
  }
}
</script>
