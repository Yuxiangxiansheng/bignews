// 当删除按钮被点击的时候
$('#postsBox').on('click', '.delete', function () {
	// 弹出删除确认框 和管理员确认是否真的要进行删除操作
	if(confirm('您真的要进行删除操作吗')) {
		// 获取到管理员要删除的文章的id
        var id = $(this).attr('cancel');
        alert(id)
		// 向服务器端发送请求 执行删除操作
		$.ajax({
			type: 'get',
			url: '/admin/article/delete'+id,
			success: function () {
				location.reload();
			}
		})
	}
});