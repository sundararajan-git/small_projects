let add = document.getElementById('add');
let button = document.getElementById('button');
let chat = document.getElementById('chat');
let para = document.getElementById('para');
button.addEventListener('click',send);

function send(){
  if(add.value!=""){
  let p=document.createElement('p');
  para.appendChild(p);
  let br =document.createElement('br');
  para.appendChild(br);
  p.innerText=add.value;
  // add.value="";
  p.addEventListener('click',()=>{
    p.remove();
    br.remove();
  });
  }
  console.log(chat);
}
