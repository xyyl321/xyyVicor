var myScroll = new IScroll("#box", {
    probeType: 3
    // 像素级的触发scroll滚动条事件
});
let shopcar = document.querySelectorAll(".Bigbox ul li");
let flag = false;
myScroll.on("scroll", function () {
    let scrollH = this.y;
    let scrollB = this.maxScrollY;
    let num = scrollH - scrollB;
    if (num < 0 && num > -50) {
        console.log("向上刷新")
    } else if (num < -50 && num > -100) {
        console.log("向下刷新")
        flag = true;
        // 提示用户可以刷新的时候将开关改为true
    }

})
myScroll.on("scrollEnd", function () {
    if (flag) {
        flag = false
        console.log("加载数据")
        data()
        myScroll.refresh()
    }
})

function data() {
    let str = "";
    shopcar.forEach((v) => {
        str += `
        <li class="box">
                <div class="top">
                    <img src="img/5、微网站购物车_11.png" alt="">
                </div>
                <div class="center">
                    <p class="one"></p>
                    <p class="logo">VERFO LAB</p>
                    <span class="two">现代简约时尚布艺沙发</span>
                </div>
                <div class="bottom">
                    <b>¥800</b>
                    <a href="orderSure.html">
                        <i class="iconfont iconyuanquanjiahao"></i>
                        <span class="mai">点击购买</span>
                    </a>

                </div>
            </li>
            <li class="box">
                <div class="top">
                    <img src="img/5、微网站购物车_13.png" alt=>
                </div>
                <div class="center">
                    <p class="one"></p>
                    <p class="logo">VERFO LAB</p>
                    <span class="two">现代简约时尚布艺沙发</span>
                </div>
                <div class="bottom">
                    <b>¥800</b>
                    <a href="orderSure.html">
                        <i class="iconfont iconyuanquanjiahao"></i>
                        <span class="mai">点击购买</span>
                    </a>
                </div>
            </li>
            <li class="box">
                <div class="top">
                    <img src="img/5、微网站购物车_17.png" alt="">
                </div>
                <div class="center">
                    <p class="one"></p>
                    <p class="logo">VERFO LAB</p>
                    <span class="two">现代简约时尚布艺沙发</span>
                </div>
                <div class="bottom">
                    <b>¥800</b>
                    <a href="orderSure.html">
                        <i class="iconfont iconyuanquanjiahao"></i>
                        <span class="mai">点击购买</span>
                    </a>
                </div>
            </li>
            <li class="box">
                <div class="top">
                    <img src="img/5、微网站购物车_19.png" alt="">
                </div>
                <div class="center">
                    <p class="one"></p>
                    <p class="logo">VERFO LAB</p>
                    <span class="two">现代简约时尚布艺沙发</span>
                </div>
                <div class="bottom">
                    <b>¥800</b>
                    <a href="orderSure.html">
                        <i class="iconfont iconyuanquanjiahao"></i>
                        <span class="mai">点击购买</span>
                    </a>
                </div>
            </li>
    `
        $(".Bigbox ul").append(str)
    })
}