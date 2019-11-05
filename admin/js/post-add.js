$(function () {
    // 10. 文章发布
    // 获取分类
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
        success: function (response) {
            console.log(response)
            var html = template('cateList', { data: response.data })
            $('#article_category').html(html)
        }
    })

    // 为文章封面表单绑定change事件
    $('#exampleInputFile').on('change', function () {
        // 获取文件
        var files = this.files[0]
        // 获取路径
        var url = URL.createObjectURL(files)

        // 图片预览
        $('#coverImg').attr('src', url)
        // 路径存储至隐藏域
        $('#exampleInputFile').val(url)
    })

    // 为发布文章表单创建提交事件
    $('.btn-release').on('click', function (e) {

        e.preventDefault()

        console.log($('form')[0])
        // 获取表单值
        var formData = new FormData($('form')[0])
        formData.append('content', tinyMCE.activeEditor.getContent())
        formData.append('state', '已发布')

        $.ajax({
            url: 'http://47.111.184.55:8888/api/v1/admin/article/publish',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                location.href = "article_list.html";
            }
        })
    })

})