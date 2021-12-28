const btn = document.querySelector('#btn')
const sideBar = document.querySelector('.sidebar')
const searchBtn = document.querySelector('.bx-search')

btn.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})

searchBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})