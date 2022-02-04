const album = document.querySelectorAll('.album')

// 鼠标移入
function Onmouseover(){
    album[0].style.transform ='rotate(30deg) translate(30px,-40px)';
    album[1].style.transform='rotate(-30deg) translate(-30px,-40px)';
}

function Onmouseout(){
    album[0].style.transform = '';
    album[1].style.transform = '';
}

for(let i=0;i<album.length;i++){
    album[i].onmouseover = function(){
        Onmouseover();
    };
    album[i].onmouseout = function(){
        Onmouseout();
    }
}

// 小火箭返回顶部
const rock = document.querySelector('.rock');
rock.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});

function appearRock(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        rock.style.display = "block";
    }else{
        rock.style.display = "none"
    }
};

window.onscroll = function(){appearRock()}
