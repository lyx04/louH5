/**
        *  1.get
        *  2.要存储数据
        *  3.要有详情页面包屑的文字
        *  4.需要放到导航栏上的有属于哪个栏目第几个id
        */
const url = "http://192.168.1.233:8080/hunt-admin/";
$.commonAjax = function(urlip,callback){
    $.get(url+urlip,data=>{
        callback(data)
    })
}
