// 当添加分类表单发生提交行为的时候
$('#model_add').on('click', function () {
    // 获取用户在表单中输入的内容
    
    var formData = $('#addCategory').serialize();   
    //向服务器端发送请求 添加分类 
    $.ajax({
        type: 'post',
        url: 'http://47.111.184.55:8888/api/v1/admin/category/add',   
        data: formData,
        success: function () {
            console.log('...')
            location.reload();
         }
    })
    //console.log(formData)
    // 阻止表单默认提交行为
    return false;
})


// // 发送ajax请求 向服务器端索要分类列表数据
$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
    success: function (response) {
        console.log(response);   
        var html = template('categoryListTpl', response);
        console.log(html);
        $('#categoryBox').html(html);
    }

})
