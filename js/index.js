window.onload = function () {
    //轮播
    let mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            autoplay: true,
            disableOnInteraction: false
        },
        loop: true,
        //轮播点
        pagination: {
            el: '.swiper-pagination',
        },
    })

    //刷新
    let myScroll = new IScroll('#roll', {
        probeType: 3

    });
}