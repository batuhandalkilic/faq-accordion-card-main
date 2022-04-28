const ul = document.getElementById('ul');


ul.addEventListener('click',function(e){

    if(e.target.classList.contains('fa-arrow-down')){
        console.log(e.target);
        e.target.parentElement.nextElementSibling.style.display = 'block';
        e.target.className='fa-solid fa-arrow-up';
    }

      else{
        e.target.parentElement.nextElementSibling.style.display = 'none';
        e.target.className='fa-solid fa-arrow-down';
      }
})






