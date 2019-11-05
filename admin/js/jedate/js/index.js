// 向服务器端发送请求索要用户信息
$.ajax({
    url:'http://47.111.184.55:8888/api/v1/admin/user/info',
    type:'get',
    success:function(response){
        console.log(response);
        // 使用模板引擎进行拼接
        var html=template('usersTpl',response)   
        //将拼接好的渲染到页面中
        $('#users').html(html)        
    }
})
$.ajax({
    url:'http://47.111.184.55:8888/api/v1/admin/user/detail',
    type:'get',
    success:function(response){
        console.log(response);
        // 使用模板引擎进行拼接
        var html=template('detailTpl',response)   
        //将拼接好的渲染到页面中
        $('#detail').html(html)        
    }
})

