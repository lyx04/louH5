(function ($) {
    $(function () {
        let patname = location.search.substring(1).split("/")
        let storname = "";
        let stor = JSON.parse(localStorage.getItem(patname[0])).filter((v, i) => {
            return v.id == patname[1]
        })
        switch (patname[0]) {
            case "project":
                storname = "招商项目"
                $(".content_font").html(stor[0].projectContent)
                break;
            case "enterprise":
                storname = "企业展示"
                 $(".content_font").html(stor[0].enterpriseContent)
                break;
            case "policy":
                storname = "招商政策"
                $(".content_font").html(stor[0].policyContent)
                break;
            case "guide":
                storname = "服务指南"
                $(".content_font").html(stor[0].guideContent)
                break;
        }
        $(`<p>${storname}<span>></span></p>`).appendTo($(".crumbs .select"))
        $(".crumbs p.oth").text(stor[0].author)
        $(`<p>${stor[0].author}</p>`).appendTo($('.content_title'))
        $(`<div class="content_time">
                <img src="../../assets/images/index/time5.png" alt="">
                <p>${stor[0].createTime}</p>
                <p class="right">${storname}</p>
            </div>`).appendTo($('.content_title'))
    })
})(jQuery)