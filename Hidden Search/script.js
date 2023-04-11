const search= document.querySelector('.search');
const btn= document.querySelector('.btn');
const input= document.querySelector('.input');

btn.addEventListener('click', () => {
    //toggle can be used to so both, add or remove the class when clicked
    search.classList.toggle('active')
    input.focus()
})