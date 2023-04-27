const hex_code=document.getElementById("hexcode");
const background=document.getElementById("background");
const button=document.getElementById("btn");
const hexNumber=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click',changehex);

function changehex(){
    let hex='#';
    for(let i=1;i<=6;i++){
        hex += getRandomHex();
    }
    hex_code.innerHTML = hex;
    background.style.backgroundColor=hex;
}
function getRandomHex(){
    let gethex=Math.floor(Math.random()*hexNumber.length);
    return hexNumber[gethex];
}
