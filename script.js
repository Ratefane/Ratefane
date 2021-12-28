let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
var feild = document.querySelector('textrea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
/*var clear = document.getElementById('clear');*/

feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333'
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder',backUp );
    this.style.borderColor = '#aaa';
}


/*clear.onclick = function(){
    btn.style.display = 'none';
    feild.value = '';
} */