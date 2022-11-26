const forms =document.querySelector('form');
const texts = document.getElementById('input');
const ul = document.getElementById('todos');
const li = document.querySelector("li");    

// ----------------添加键盘事件----------------------------
forms.addEventListener('submit',(event)=>{
    event.preventDefault();
    //1.创建元素
    const li = document.createElement("li");
    // const ul = document.querySelector("ul");    
    //2.添加元素，键盘enter就添加li
    ul.appendChild(li);
    li.innerText=texts.value;
    //3.然后清空input中的文字
    texts.value='';

// ----------------添加鼠标事件-----------------------------
    li.addEventListener('mousedown',(e)=>{
        // 鼠标左键添加li里面的文字
        if(e.button==0){
            li.classList.add('completed');
        }
        // 鼠标滚轮按下清除li的样式
        if(e.button==1){
            li.classList.remove('completed');
        }
        // 鼠标右键删除lis
        if(e.button==2){
            li.remove();
        }


    })

    
})





