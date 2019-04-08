//活动管理的api接口
import request from '@/utils/request'    //elementUI封装了网络交互涉及到的代码

//所有的方法以一个对象的方式导出,解决代码冗余的问题
export default {
    getList: function() {
        return request({
            url: '/gathering/gathering',  //请求后台的地址
            method: 'get'               //请求的方式
        })
    }
}


