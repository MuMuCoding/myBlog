const myslide = document.querySelectorAll('.myslide');
const min = document.querySelectorAll('.min');
const slides = document.querySelector('.slides')

// 定义一个图片索引值用于存储图片
let index = 0;
// 封装一个轮播函数
function showSlides(n) {
    if (n > myslide.length - 1) {
        index = 0
    }
    if (n < 0) {
        index = myslide.length - 1
    }
    for (let i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none";
    };
    for(let i=0;i<min.length;i++){
        min[i].style.opacity= 0.5
    }

    myslide[index].style.display = "block";
    min[index].style.opacity = 1

}
// 调用轮播函数进行轮播,让上面那个函数在内部当index=0时就运行；
showSlides(index);
// 定义一个下一张函数
function slidePlus(n) {
    showSlides(index += n)
}
function currSlide(n){
    showSlides(index =n )
}

// 封装一个自动轮播函数
function autoPlay() {

    index++
    if (index > myslide.length - 1) {
        index = 0
    }
    for (let i = 0; i < myslide.length; i++) {
        myslide[i].style.display = "none"
    }
    for(let i=0;i<min.length;i++){
        min[i].style.opacity= 0.5
    }
    myslide[index].style.display = "block"
    min[index].style.opacity = 1
}
// 定义一个轮播容器
let timer;
timer = setInterval(autoPlay, 2000);
// 当鼠标在大图片上停止轮播(离开继续轮播)
// for(let i=0;i<myslide.length;i++){
//     myslide[i].onmouseover = function(){
//         clearInterval(timer);
//     };
//     myslide[i].onmouseout = function(){
//         timer = setInterval(autoPlay,2000)
//     }
// }


// 定义侧边图片按钮函数
function currentSlide(n) {
    showSlides(index = n)
}

// 当点击侧边图片按钮的时候停止自动轮播(离开继续轮播)
// for(let i=0;i<min.length;i++){
//     min[i].onmousedown = function(){
//         clearInterval(timer)
//     };
//     min[i].onmouseout = function(){
//         timer = setInterval(autoPlay,2000)
//     }
// }

// 直接他妈让鼠标悬停整个大盒子上时候就停止轮播--------------------------------
slides.onmouseover = function () {
    clearInterval(timer);
};
slides.onmouseout = function () {
    timer = setInterval(autoPlay, 2000)
}
