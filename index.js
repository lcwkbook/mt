 window.onload = function(){
    let dropDown =  document.querySelector('.header-nav-first')         
    let dropDownList = dropDown.querySelectorAll(".has-child");
    for(let i = 0; i < dropDownList.length;i ++){

        // -找出单个li
        let myLi = dropDownList[i];
        // -给li添加事件
        myLi.onmouseover = function(){
            let myDl = myLi.querySelectorAll(".header-nav-second")[0];
            myDl.style.display='block';
        }
        myLi.onmouseout = function(){
            let myDl = myLi.querySelectorAll(".header-nav-second")[0];
            myDl.style.display='none';
        }

    }
}