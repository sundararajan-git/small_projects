let container = document.querySelector('.container');
let btns = document.querySelectorAll('.btn');
let bg =['https://wallpapers.com/images/file/4k-hulk-neon-green-xokijypnnpb09e9e.jpg','https://wallpapers.com/images/featured-full/avengers-endgame-mghdp4gaqzu4q4us.jpg','https://wallpapers.com/images/file/avengers-endgame-be3i5shp129k8bd3.jpg','https://wallpapers.com/images/featured-full/doctor-strange-6es4yutxrbl0nas9.jpg','https://wallpapers.com/images/featured-full/marvel-superheroes-w5u75zr2f1b139b7.jpg']

let index=0;
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                index = bg.length-1;
            }
            container.style.background = `url(${bg[index]}) center/cover no-repeat `;
        }
        else{
            index++;
            if(index===bg.length){
                index=0
            }
            container.style.background = `url(${bg[index]}) center/cover no-repeat `;
        }
    })
})