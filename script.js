document.querySelector('.btn').onclick=function(){
    let value=document.querySelector('.number').value
    // console.log(value +" x " + " 1 " + " = " +  value*1)
    // console.log(value +" x " + " 2 " + " = " +  value*2)
    // console.log(value +" x " + " 3 " + " = " +  value*3)
    // console.log(value +" x " + " 4 " + " = " +  value*4)
    // console.log(value +" x " + " 5 " + " = " +  value*5)
    // console.log(value +" x " + " 6 " + " = " +  value*6)
    // console.log(value +" x " + " 7 " + " = " +  value*7)
    // console.log(value +" x " + " 8 " + " = " +  value*8)
    // console.log(value +" x " + " 9 " + " = " +  value*9)
    // console.log(value +" x " + " 10 " + " = " +  value*10)
    let div2=document.querySelector('.div2')
    div2.innerHTML=""
    for(let i=1 ; i<=10 ; i++){
       div2.innerHTML=div2.innerHTML +  " <span> " + value +" x " + i + " = " + value*i + " </span> "
    }
     
    
}

// 2 x 1 = 2
