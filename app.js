
const sideBtn = document.querySelector('.sidebar-toggle');
const sideMenu = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')



sideBtn.addEventListener('click', ()=>{
    sideMenu.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', ()=>{
    sideMenu.classList.toggle('show-sidebar')
})
