// 向服务器端发送请求获取最新评论数据
$.ajax({
    url:'http://47.111.184.55:8888/api/v1/index/latest_comment',
    type:'get',
    success:function(response){
        // console.log(response);
        var html=template('commentTpl',response)   
        $('#comment').html(html) 
    }
})

// 向服务器端发送请求获取焦点关注数据
$.ajax({
    url:'http://47.111.184.55:8888/api/v1/index/attention',
    type:'get',
    success:function(response){
        // 拼接
        var html=template('introTpl', response)   
        //   渲染到页面
        $('#intro').html(html)
    }
})






