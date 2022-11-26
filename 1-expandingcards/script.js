//this is script.js
// 当鼠标点击某个卡片时，让其样式变成active
var panels = document.getElementsByClassName('panel');
var spaner = document.querySelectorAll('span');

for(i=0;i<panels.length;i++){

    //添加自定义属性
    panels[i].setAttribute('index',i);

    //鼠标点击时
    panels[i].onmouseover = function(){
        for(i=0;i<panels.length;i++){
            panels[i].className='panel';                   
        }
        this.className='panel active';
        this.style.transition='flex 0.7s ease-in';

        var index = this.getAttribute('index');
        for(i=0;i<spaner.length;i++){
            spaner[i].style.opacity=0;
        }
        spaner[index].style.opacity=1;
        spaner[index].style.transition=' opacity 0.3s ease-in 0.4s';
    }


}

