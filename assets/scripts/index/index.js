(function ($) {
    $(function () {
        var clientX, clientXm;
        // banner
        var banner = new Swiper('#banner', {
            direction: 'horizontal',
            autoplay: 3000,
            loop: true,
        })
        // select
        var select = new Swiper('#select', {
            onlyExternal: true,
        })
        $(".select_title .select_ li").on("touchstart", function () {
            $(".select_title .select_ li").removeClass("active")
            $(this).addClass("active")
            select.slideTo($(this).index(), 300, false)
        })
        //招商项目的时间
        $("#select .swiper-slide.first").on("touchstart", function (e) {
            clientXm = 0
            clientX = e.originalEvent.touches[0].clientY;
        })
        $("#select .swiper-slide.first").on("touchmove", function (e) {
            clientXm = e.originalEvent.touches[0].clientY - clientX
        })
        $("#select .swiper-slide.first").on("touchend", function (e) {
            // alert(new Date() - time)/
            if (!clientXm) {
                // alert(new Date() - time)
                var target = e.target || e.srcElement;
                console.log(target)
                if (target.nodeName.toLowerCase() == 'li') {
                    location.assign("/page/details/details.html?project/" + $(target).attr("sid"))
                } else {
                    location.assign("/page/details/details.html?project/" + $(target).closest("li").attr("sid"))
                }
            }
        })
        //企业展示的时间
        $("#select .swiper-slide.two").on("touchstart", function (e) {
            clientXm = 0
            clientX = e.originalEvent.touches[0].clientY;
        })
        $("#select .swiper-slide.two").on("touchmove", function (e) {
            clientXm = e.originalEvent.touches[0].clientY - clientX
        })
        $("#select .swiper-slide.two").on("touchend", function (e) {
            if (!clientXm) {
                var target = e.target || e.srcElement;
                if (target.nodeName.toLowerCase() == 'li') {
                    location.assign("/page/details/details.html?enterprise/" + $(target).attr("sid"))
                } else {
                    location.assign("/page/details/details.html?enterprise/" + $(target).closest("li").attr("sid"))
                }
            }

        })
        // 政策法规的时间
        $("#select .swiper-slide.three").on("touchstart", function (e) {
            clientXm = 0
            clientX = e.originalEvent.touches[0].clientY;
        })
        $("#select .swiper-slide.three").on("touchmove", function (e) {
            clientXm = e.originalEvent.touches[0].clientY - clientX
        })
        $("#select .swiper-slide.three").on("touchend", function (e) {
            if (!clientXm) {
                var target = e.target || e.srcElement;
                if (target.nodeName.toLowerCase() == 'li') {
                    location.assign("/page/details/details.html?policy/" + $(target).attr("sid"))
                } else {
                    location.assign("/page/details/details.html?policy/" + $(target).closest("li").attr("sid"))
                }
            }
        })

        // 招商项目
        $.commonAjax("frontend/project/WX_findAll", data => {
            data.forEach(function (v, i) {
                $(`<li sid="${v.id}">
                    <p class="oth">${v.author}</p>
                    <p>
                        <img src="assets/images/index/time5.png" alt="">
                        <span>${v.createTime}</span>
                        <span class="right">招商项目</span>
                    </p>
                    <span class="more">...</span>
                </li>`).appendTo($("#select .swiper-slide.first"))
            });
            data = JSON.stringify(data)
            window.localStorage.setItem("project", data)
        })
        // 企业展示
        $.commonAjax("frontend/enterprise/WX_findAll", data => {
            data.forEach((v, i) => {
                $(`<li sid="${v.id}">
                    <img src="${v.image}" alt="">
                    <div class="select_font_right">
                        <p class="oth">${v.enterpriseName}</p>
                        <p class="font">${v.enterpriseContent}</p>
                    </div>
                </li>`).appendTo($("#select .swiper-slide.two"))
            })
            data = JSON.stringify(data)
            window.localStorage.setItem("enterprise", data)
        })
        // 招商政策
        $.commonAjax("frontend/policy/WX_findAll", data => {
            data.forEach((v, i) => {
                $(`<li sid="${v.id}">
                    <p class="oth">${v.author}</p>
                    <p>
                        <img src="assets/images/index/time5.png" alt="">
                        <span>${v.createTime}</span>
                        <span class="right">招商项目</span>
                    </p>
                    <span class="more">...</span>
                </li>`).appendTo($("#select .swiper-slide.three"))
            })
            data = JSON.stringify(data)
            window.localStorage.setItem("policy", data)
        })
    })
})(jQuery)