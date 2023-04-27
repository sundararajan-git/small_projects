// variables

let input=document.getElementById('in');
let result=document.getElementById('result');
let reset=document.getElementById('reset');
let btn=document.getElementById('btn');

input.style.padding = 200;

//  To converter types
arr=['Mm','Cm','Inch','Feet','Meter','Km','Yards','Mile'];

//  To reate the options in select
arr.forEach(val=>{
    let type=document.createElement('option')
    type.textContent=val
    type.value=val
    document.getElementById('form').appendChild(type)
}
)
arr.forEach(val=>{
    let type1=document.createElement('option')
    type1.textContent=val
    type1.value=val
    document.getElementById('to').appendChild(type1)
}
)

// button controll
reset.addEventListener('click',myreset);
btn.addEventListener('click',myResult);

function myreset(){
    if(input.value!=""||result.value!=''){
        input.value='';
        result.value='';
    }
}


function myResult(){
    let opt=document.getElementById('form').value;
    let opt1=document.getElementById('to').value;
    if(opt==arr[0]){
        if(opt1==arr[0]){
            alert("please change type converstion");
        }
        else if(opt1==arr[1]){
            result.value=input.value/10;
        }
        else if(opt1==arr[2]){
            result.value=input.value/25.4;
        }
        else if(opt1==arr[3]){
            result.value=input.value/304.8;
        }
        else if(opt1==arr[4]){
            result.value=input.value/1000;
        }
        else if(opt1==arr[5]){
            result.value=input.value/1000000;
        }
        else if(opt1==arr[6]){
            result.value=input.value/914.4;
        }
        else{
            result.value=input.value/1609344;
        }
    }
    else if(opt==arr[1]){
        if(opt1==arr[0]){
            result.value=input.value*10;
        }
        else if(opt1==arr[2]){
            result.value=input.value/2.54;
        }
        else if(opt1==arr[3]){
            result.value=input.value/30.48;
        }
        else if(opt1==arr[5]){
            result.value=input.value/100000;
        }
        else if(opt1==arr[6]){
            result.value=input.value/91.44;
        }
        else if(opt1==arr[7]){
            result.value=input.value/160900;
        }
        else if(opt1==arr[1]){
            alert("please change type converstion");
        }
        else{
            result.value=input.value/100;
        }
    }
    else if(opt==arr[2]){
        if(opt1==arr[2]){
            alert("please change type converstion");
        }
        else if(opt1==arr[0]){
            result.value=input.value*25.4;
        }
        else if(opt1==arr[1]){
            result.value=input.value/2.54;
        }
        else if(opt1==arr[3]){
            result.value=input.value/12;
        }
        else if(opt1==arr[4]){
            result.value=input.value/39.37;
        }
        else if(opt1==arr[5]){
            result.value=input.value/39370;
        }
        else if(opt1==arr[6]){
            result.value=input.value/36;
        }
        else{
            result.value=input.value/63360;
        }
    }
    else if(opt==arr[3]){
        if(opt1==arr[3]){
            alert("please change type converstion");
        }
        else if(opt1==arr[1]){
            result.value=input.value*30.48;
        }
        else if(opt1==arr[2]){
            result.value=input.value*12;
        }
        else if(opt1==arr[0]){
            result.value=input.value*304.8;
        }
        else if(opt1==arr[4]){
            result.value=input.value/3.281;
        }
        else if(opt1==arr[5]){
            result.value=input.value/3281;
        }
        else if(opt1==arr[6]){
            result.value=input.value/3;
        }
        else{
            result.value=input.value/5280;
        }
    }
    else if(opt==arr[4]){
        if(opt1==arr[4]){
            alert("please change type converstion");
        }
        else if(opt1==arr[1]){
            result.value=input.value/100;
        }
        else if(opt1==arr[2]){
            result.value=input.value/39.37;
        }
        else if(opt1==arr[3]){
            result.value=input.value/3.281;
        }
        else if(opt1==arr[0]){
            result.value=input.value*1000;
        }
        else if(opt1==arr[5]){
            result.value=input.value/1000;
        }
        else if(opt1==arr[6]){
            result.value=input.value*1.094;
        }
        else{
            result.value=input.value/1609;
        }
    }
    else if(opt==arr[5]){
        if(opt1==arr[5]){
            alert("please change type converstion");
        }
        else if(opt1==arr[1]){
            result.value=input.value*100000;
        }
        else if(opt1==arr[2]){
            result.value=input.value*39370;
        }
        else if(opt1==arr[3]){
            result.value=input.value/3281;
        }
        else if(opt1==arr[4]){
            result.value=input.value*1000;
        }
        else if(opt1==arr[0]){
            result.value=input.value*1000000;
        }
        else if(opt1==arr[6]){
            result.value=input.value*1094;
        }
        else{
            result.value=input.value/1.609;
        }
    }
    else if(opt==arr[6]){
        if(opt1==arr[6]){
            alert("please change type converstion");
        }
        else if(opt1==arr[1]){
            result.value=input.value/91.44;
        }
        else if(opt1==arr[2]){
            result.value=input.value*36;
        }
        else if(opt1==arr[3]){
            result.value=input.value/3;
        }
        else if(opt1==arr[4]){
            result.value=input.value/1.094;
        }
        else if(opt1==arr[5]){
            result.value=input.value/ 1094;
        }
        else if(opt1==arr[0]){
            result.value=input.value*914.4;
        }
        else{
            result.value=input.value/1760;
        }
    }
    else if(opt==arr[7]){
        if(opt1==arr[7]){
            alert("please change type converstion");
        }
        else if(opt1==arr[1]){
            result.value=input.value*160900;
        }
        else if(opt1==arr[2]){
            result.value=input.value*63360;
        }
        else if(opt1==arr[3]){
            result.value=input.value*5280;
        }
        else if(opt1==arr[4]){
            result.value=input.value*1609;
        }
        else if(opt1==arr[5]){
            result.value=input.value*1.609;
        }
        else if(opt1==arr[6]){
            result.value=input.value*1760;
        }
        else{
            result.value=input.value*1609344;
        }
    }
}
