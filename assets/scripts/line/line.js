(function ($) {
    $(function () {
        var clientX, clientXm;
        // 服务指南
        $.commonAjax("frontend/guide/WX_findAll", data => {
            data.forEach((v, i) => {
                $(`<li sid="${v.id}">
                    <a href="">
                        <p class="oth">${v.guideName}</p>
                    </a>
                </li>`).appendTo($(".guide_content"))
            })
            data = JSON.stringify(data)
            window.localStorage.setItem("guide", data)
        })
        $(".guide_content").on("touchstart", function (e) {
            clientXm = 0
            clientX = e.originalEvent.touches[0].clientY;
        })
        $(".guide_content").on("touchmove", function (e) {
            clientXm = e.originalEvent.touches[0].clientY - clientX
        })
        $(".guide_content").on("touchend", function (e) {
            e.preventDefault()
            if (!clientXm) {
                var target = e.Target || e.srcElement
                if (target.nodeName.toLowerCase() == 'li') {
                    location.assign("/page/details/details.html?guide/" + $(target).attr("sid"))
                } else {
                    location.assign("/page/details/details.html?guide/" + $(target).closest("li").attr("sid"))
                }
            }

        })
    })
})(jQuery)