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


// $('#pagination-demo').twbsPagination({
//     totalPages: 35,
//     first: '',
//     visiblePages: 7,
//     onPageClick: function (event, page) {
//         $('#page-content').text('Page ' + page);
//     }
// });
// 入口函数

//进到文章列表页面，就获取符合条件的文章封装成了一函数。
function getData(myPage) {
    $.ajax({
        type: 'get',
        url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
        data: {
            page: myPage, // 当前第几页
            perpage: 5    // 每页展示条数
        },
        success: function (backData) {
            console.log(backData)
            var resHtml = template('postsTpl', backData)
            $('#postsBox').html(resHtml)

            var totalPages = backData.data.totalPage

            if (myTotalPage != totalPages) {
                myTotalPage = totalPages

                $pagination.twbsPagination('destroy')
                $pagination.twbsPagination($.extend({}, defaultOpts, {
                    startPage: 1,
                    totalPages: totalPages
                }))
            }
        }
    })
}

getData(1)


var $pagination = $('#pagination-demo')
var myTotalPage = 10

var defaultOpts = {
    totalPages: myTotalPage,
    visiblePages: 7,
    first: '首页',
    last: '末页',
    prev: '上一页',
    next: '下一页',
    onPageClick: function (event, page) {
        getData(page)
    }
}

$pagination.twbsPagination(defaultOpts);


$('#pagination-demo').twbsPagination();

