const text= document.querySelector('.loading-text');
const bg= document.querySelector('.bg');

let load=0;
let int= setInterval(blurring, 30);  //30= 30ms
let filterBlur= 30;

function blurring(){
    load++;

    if(load>99){
        clearInterval(int);
    }

    text.innerHTML= load+'%';
    text.style.opacity= 1 - (load / 100);
    filterBlur-= 0.3;
    bg.style.filter= 'blur('+filterBlur+'px)';
}
