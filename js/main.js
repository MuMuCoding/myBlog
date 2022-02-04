const nav = document.querySelector('.nav');
const toggle = document.querySelector('.toggle-collapse');
const btn = document.querySelector('.btn');
const links = document.querySelectorAll('.nav-link')

//给nav添加一个高度样式，使得移动端可点展开按钮
toggle.onclick=function(){
    nav.classList.toggle('collapse');
};

// 为btn设置跳转路径
btn.onclick = function(){
    document.location.href="inside-index.html"
};

// 导航区按钮
for(let i=0;i<links.length;i++){
    links[i].onclick = function(){
        alert('success');
    }
}

