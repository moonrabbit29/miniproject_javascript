let container = document.querySelector('.container');
container.addEventListener('click',e=>{
    if(e.target.className == 'thumb'){
    const thumbs = document.querySelectorAll('.thumb').forEach(y=>{
      y.className='thumb';  
    })
    const big = document.querySelector('.jumbo');
    let temp = big.src;
    big.setAttribute('src',  e.target.src);
    e.target.setAttribute('src',temp);
    big.classList.add('fade');
    setTimeout(function(){
        big.classList.remove('fade');
    }, 500)
    e.target.classList.add('active');
    }
})