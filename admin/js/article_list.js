$.ajax({
    type: 'get',
    url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
    success: function (response) {
        var html = template('postsTpl', response);
        $('#postsBox').html(html)

    }
})

$(function () {
    $.ajax({
        url: 'http://47.111.184.55:8888/api/v1/admin/category/list',
        type: 'get',
        success: function (response) {

            var html = template('categoryTpl', response)
            $('#article_category').html(html);
        }
    })
})

$('#filterForm').on('submit', function () {
    var formData = $(this).serialize();
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
        data: formData,
        success: function (response) {
            var html = template('postsTpl', response);
            $('#postsBox').html(html)

        }
    })
  

  return false;
})

// 删除文章功能
// 当删除按钮被点击的时候
$('#postsBox').on('click', '.delete', function () {
	// 弹出删除确认框 和管理员确认是否真的要进行删除操作
	
	if (confirm('真的要删除吗')) {
		var id = $(this).attr('data-id');
		// alert(id);
		// 向服务器端发送请求 执行删除操作
		$.ajax({
			type: 'post',
			url: 'http://47.111.184.55:8888/api/v1/admin/article/delete',
			data: {
				id:id
			},
			success: function () {
				location.reload();
			}
		})
	}
});