// 通过js来控制下拉菜单的显示和隐藏

//保证在HTML文档加载完成之后，才加载本js函数
window.onload = function () {

    //第一步 要找到li(下拉菜单的标题)
    // -通过getElementById
    let dropDown = document.getElementById("dropdown");
    //-通过链式查找,将所有li元素查找出来。找出来的是数组
    let dropDownList = dropDown.getElementsByTagName("li");

    //第二步 通过循环给li增加上鼠标hover事件.
    for (let i = 0; i < dropDownList.length; i++) {
        if (i == 1) {
            //终止本次循环，开始下一次循环
            continue;
        }
        // -找出单个li，准备添加事件
        let myLi = dropDownList[i];
        // -给li添加onmouseover
        myLi.onmouseover = function () {
            //找到Dl，并且通过css样式，来控制Dl的显示或者隐藏
            let myDl = myLi.getElementsByTagName("dl")[0];
            //给myDl增加上show样式，显示。
            myDl.classList.add("show");
        }
        myLi.onmouseout = function () {
            let myDl = myLi.getElementsByTagName("dl")[0];
            myDl.classList.remove("show");
        }
    }

    /** 
     * 轮播图部分
     */
    /**
     * 箭头的显示和隐藏
     * -找到两个箭头
     * -找到轮播图，设置鼠标移入和移出事件
     *   -移入left  right 显示，移出 left  right 隐藏
    **/
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let carousel = document.getElementById("carousel");

    // 找到所有的下标li
    let number = document.getElementById("number");
    let numberList = number.getElementsByTagName("li");

    // 找到图片控件，以便操作
    let image = document.getElementById("centerImage");
    image.src = "./images/ad01.jpg";


    //当前显示图片的标志
    let currentImgIndex = 1;

    carousel.onmouseover = function () {
        left.style.display = "block";
        right.style.display = "block";

        // 鼠标移入轮播图的时候，暂停自动播放

    }
    carousel.onmouseout = function () {
        left.style.display = "none";
        right.style.display = "none";
    }

    // 点击右边箭头
    right.onclick = function () {
        currentImgIndex++;
        //最多显示6张
        if (currentImgIndex == 7) {
            // 还原到1，重新从1开始显示
            currentImgIndex = 1;
        }
        /**
         *每一次点击都更改src的值 
         -进行字符串拼接，将图片的序号单独提取出来，点击的时候改变序号
         */
        image.src = "./images/ad0" + currentImgIndex + ".jpg";

        // 改变下标（li）的显示状态
        let temp = currentImgIndex - 1;
        //每一次点击的时候，都检查所有下标的序号。
        //当此下标序号和图片序号相等，则改变此下标的背景颜色为#fff
        //不相等就改变其颜色为#ccc
        for (let i = 0; i < numberList.length; i++) {
            //检查li的下标
            if (i == temp) {
                console.log('下标打印');
                numberList[i].style.backgroundColor = "#fff";
                // numberList[i].style.color = "#fff";
            } else {
                numberList[i].style.backgroundColor = "#ccc";
            }
        }
    }

    //点击左边箭头
    left.onclick = function () {
        if (currentImgIndex == 1) {
            currentImgIndex = 6;
        }
        currentImgIndex--;
        image.src = "./images/ad0" + currentImgIndex + ".jpg";

        // 改变下标（li）的显示状态
        let temp = currentImgIndex - 1;
        //每一次点击的时候，都检查所有下标的序号。
        //当此下标序号和图片序号相等，则改变此下标的背景颜色为#fff
        //不相等就改变其颜色为#ccc
        for (let i = 0; i < numberList.length; i++) {
            //检查li的下标
            if (i == temp) {
                numberList[i].style.backgroundColor = "#fff";
                // numberList[i].style.color = "#fff";
            } else {
                numberList[i].style.backgroundColor = "#ccc";
            }
        }

    }

    //自动轮播 
    /**
     * setInterval系统内置的定时器函数，可以周期性的执行一个函数
     * -语法
     * setInterval(要被执行函数,执行的间隔周期)
     * -使用内置函数clearInterval可以停止周期执行。
     */
    let interval = setInterval(function () {
        console.log('我是周期性执行');
        currentImgIndex++;
        //最多显示6张
        if (currentImgIndex == 6) {
            // 还原到1，重新从1开始显示
            currentImgIndex = 1;
        }
        /**
         *每一次点击都更改src的值 
         -进行字符串拼接，将图片的序号单独提取出来，点击的时候改变序号
         */
        image.src = "./images/ad0" + currentImgIndex + ".jpg";


        // 改变下标（li）的显示状态
        let temp = currentImgIndex - 1;
        //每一次点击的时候，都检查所有下标的序号。
        //当此下标序号和图片序号相等，则改变此下标的背景颜色为#fff
        //不相等就改变其颜色为#ccc
        for (let i = 0; i < numberList.length; i++) {
            //检查li的下标
            if (i == temp) {
                numberList[i].style.backgroundColor = "#fff";
                // numberList[i].style.color = "#fff";
            } else {
                numberList[i].style.backgroundColor = "#ccc";
            }
        }

    }, 3000);


 
    /***
     * 
     * 控制侧边栏的显示和隐藏
     */

       //第一步 要找到li(下拉菜单的标题)
    // -通过getElementById
    let dropright = document.getElementById("dropright");
    //-通过链式查找,将所有li元素查找出来。找出来的是数组
    let dropRightList = dropright.getElementsByTagName("li");

    //第二步 通过循环给li增加上鼠标hover事件.
    for (let i = 0; i < dropRightList.length; i++) {
      
        // -找出单个li，准备添加事件
        let myLi = dropRightList[i];
        // -给li添加onmouseover
        myLi.onmouseover = function () {
            //找到Dl，并且通过css样式，来控制Dl的显示或者隐藏
            let myDl = myLi.getElementsByTagName("div")[0];
            //给myDl增加上show样式，显示。
            myDl.classList.add("show");
        }
        myLi.onmouseout = function () {
            let myDl = myLi.getElementsByTagName("div")[0];
            myDl.classList.remove("show");
        }
    }

    // 推荐民宿
    
    // 操作菜单标题
    // -找到菜单
    let hotelTab = document.getElementById("hotel-tab");
    // -找出所有的菜单标题(10个)
    let hotelTabLi = hotelTab.getElementsByTagName("li");
    let container = document.getElementById("tab-container");
    // 找出所有的tabList (10个)
    let tabList = container.getElementsByClassName("tablist");

    //（遍历） 操作内容显示区域
    for(let i = 0; i < hotelTabLi.length; i ++){
        hotelTabLi[i].onmouseover = function(){
            //每当一个li被鼠标覆盖的时候
            //-隐藏所有的tab内容
            for(let j = 0 ; j < hotelTabLi.length; j ++){
                // hotelTabLi[j].className = "";
                tabList[j].style.display = "none";
            }
            // -显示与当前li绑定的tab内容
            // hotelTabLi[i].className = ""
            tabList[i].style.display = "block";
        }
    }


    /**
     * 
     * 猫眼电影
     */
    let filmLeft = document.getElementById("film-left");
    let filmRight = document.getElementById("film-right");
    let filmList = document.getElementsByClassName("filmList")[0];

    filmLeft.onclick = function(){
        filmList.style.left = "0px";
    }

    filmRight.onclick = function(){
        console.log('click');
        filmList.style.left = "-1250px";
    }

    // tab切换
    // 操作菜单标题
    // -找到菜单
    let filmTab = document.getElementById("fileTabTitle");
    // -找出所有的菜单标题(10个)
    let filmTabLi = filmTab.getElementsByTagName("li");

    // let filmContainer = document.getElementById("tab-container");
    // 找出所有的tabList (10个)
    let filmLists = document.getElementsByClassName("filmList");

    for(let i = 0; i < filmTabLi.length; i ++){
        filmTabLi[i].onmouseover = function(){
            //每当一个li被鼠标覆盖的时候
            //-隐藏所有的tab内容
            for(let j = 0 ; j < filmTabLi.length; j ++){
                filmLists[j].style.display = "none";
            }
            // -显示与当前li绑定的tab内容
            filmLists[i].style.display = "block";
        }
    }


}