const note = document.querySelector('.note')

// import axios from 'axios';
note.onclick = function(){
    axios.get('http://127.0.0.1:5001/job').then(res=>{
        console.log('请求成功',res.data)
    }).catch(error=>{
        alert('内部错误！',error.message)
    })
}