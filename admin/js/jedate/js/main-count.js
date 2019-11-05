// 向服务器端发送请求获取统计数据
$.ajax({
    url:'http://47.111.184.55:8888/api/v1/admin/data/info',
    type:'get',
    success:function(response){
        console.log(response);
         // 拼接
         var html=template('statisticsTpl', response)   
         //   渲染到页面
         $('#statistics').html(html)
    }
})