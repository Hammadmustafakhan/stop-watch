var min = 0;
var sec = 0;
var msec= 0;

var minhead = document.getElementById('min')
var sechead = document.getElementById('sec')
var msechead = document.getElementById('msec')


var result ;

function timer (){
    msec++ 
    msechead.innerHTML=msec
    if(msec >= 100){
        msec = 0
        sec++
        sechead.innerHTML=sec   
    }else if (sec >=60){
        sec = 0;
        min++
minhead.innerHTML=min
    }
}
var disable
function start (x){
    result = setInterval(timer,10)
  disable = document.getElementById(x)
    disable.disabled = true
}
function stop(){
    var stop= clearInterval(result )
  disable.disabled=false
}
function rest (){
    msechead.innerHTML =0
    sechead.innerHTML=0
    minhead.innerHTML=0
    min = 0
    sec = 0
    msec= 0
    stop()
    x.disabled=false
    disable.disabled=false
}