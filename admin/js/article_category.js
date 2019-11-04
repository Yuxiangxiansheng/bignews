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
            location.reload();
         }
    })
    //console.log(formData)
    // 阻止表单默认提交行为
    return false;
})

// 发送ajax请求 向服务器端索要分类列表数据
$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
    success: function (response) {   
        var html = template('categoryListTpl', response);
        $('#categoryBox').html(html);
    }

})

// 删除文章分类
// 利用事件委托为删除按钮绑定事件
$('#categoryBox').on('click', '.delete', function () {
    if(confirm('残忍删除?')) {
        // 获取点击的数据id
        var id = $(this).attr('data-id')

        // 发送ajax请求,删除数据
        $.ajax({
            url: 'http://47.111.184.55:8888/api/v1/admin/category/delete',
            type: 'post',
            data: {
                id: id
            },
            success: function (data) {
                location.reload()
            }
        })
    }
})

// 编辑文章类别
// 利用事件委托为编辑按钮绑定事件
$('#categoryBox').on('click', '.edit', function () {
    // 获取点击的数据id
    var id = $(this).attr('data-id')

    // 发送ajax请求
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/category/search',
        type: 'get',
        data: {
            id: id
        },
        success: function (data) {
            console.log(data);
            var html = template('modifyTpl', data)
            console.log(html);
            $('#addModal').modal('show');
            $('.modal-content').html(html)
        }
    })

    // 获取
    $('#addModal').on('click', '#modifyAdd', function () {
        // 获取用户在表单中输入的内容
        console.log(1);
        var name = $('#nameAdd').val()
        var slug = $('#slugAdd').val()
        // var formData = $('#addCategory').serialize();
        // console.log(formData);
        
        //向服务器端发送请求 添加分类 
        $.ajax({
            type: 'post',
            url: 'http://47.111.184.55:8888/api/v1/admin/category/edit',   
            data: {
                name: name,
                slug: slug,
                id: id
            },
            success: function () {
                location.reload();
             }
        })
        //console.log(formData)
        // 阻止表单默认提交行为
        return false;
    })
})
