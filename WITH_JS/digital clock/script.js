
function displayTime(){
    let dateTime= new Date();
    let hrs=dateTime.getHours();
    let mins=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    
    if(hrs>12){
        document.getElementById('ampm').innerHTML="PM";
        hrs-=12; 
    }
    document.getElementById('hrs').innerHTML= padzero(hrs);
    document.getElementById('mins').innerHTML= padzero(mins);
    document.getElementById('sec').innerHTML=padzero(sec);

}

function padzero(num){
    return num<10? "0"+ num:num
}
setInterval(displayTime,500)