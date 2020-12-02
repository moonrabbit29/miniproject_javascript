function changecolor(color){
    document.body.style.background=color;
}
function  cgcolor(color){
    document.body.classList.toggle(color);
    warna=document.body.getAttribute('class');
    if(warna==""){
        changecolor('transparent')
    }else{
        changecolor(color);
    }
}
const sectionyeah = document.querySelector('#yeah');
const button=sectionyeah.querySelector('#yellow');
button.onclick = ()=>cgcolor('yellow');
const button2 = sectionyeah.querySelector('#red');
button2.onclick=()=>cgcolor('red');
const buttonbaru = document.createElement('button');
const txtbutton =  document.createTextNode('random color');
buttonbaru.appendChild(txtbutton);
buttonbaru.setAttribute('type','button');
sectionyeah.appendChild(buttonbaru);
buttonbaru.onclick = ()=>{
    let random = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    // let r =Math.round(Math.random() * 255 +1);
    // let g = Math.round(Math.random() * 255 +1);
    // let b = Math.round(Math.random() * 255 +1)
    //random = 'rgb('+r+','+g+','+b +')';
    cgcolor(random);
}
const sliderRed = document.createElement('input');
sliderRed.setAttribute('type','range');
sliderRed.setAttribute('min','0');
sliderRed.setAttribute('max','255');
const redSq = document.querySelector('.kotak');
const hijau = document.querySelector('.hijau');
document.body.insertBefore(sliderRed,hijau);
const sHijau = document.querySelector("input[name=Shijau]");
const sBiru = document.querySelector("input[name=Sbiru]");

//untuk menangkap elemen yg memiliki name dengan queryselector document.querySelector('input[name=.....]')
sliderRed.addEventListener('input',()=>{
    let r =  sliderRed.value;
    let g =  sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
}) 
sHijau.addEventListener('input',()=>{
    let r =  sliderRed.value;
    let g =  sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
}) 
sBiru.addEventListener('input',()=>{
    let r =  sliderRed.value;
    let g =  sHijau.value;
    let b = sBiru.value;
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
}) 
//mouse movement 

document.body.addEventListener('mousemove',function(event){
    //posisi mouse 
    let xPos = Math.round((event.clientX / window.innerWidth) *255);
    let yPos = Math.round((event.clientY /window.innerHeight) *255);
    let pos  =xPos/yPos *255 +1
    console.log(''+xPos+','+yPos);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+','+ pos+')';

})

