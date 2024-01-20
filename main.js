//select hours,min,sec
var hours=document.getElementById("hours")
var min=document.getElementById("min")
var sec=document.getElementById("sec")
//set interval after get the hours,min,sec
setInterval(()=>{
    var time=new Date()
    hours.innerHTML=(time.getHours()<10?"0":"") + time.getHours()
    min.innerHTML=(time.getMinutes()<10?"0":"") + time.getMinutes()
    sec.innerHTML=(time.getSeconds()<10?"0":"") + time.getSeconds()
},1000)