let toggleButton = document.getElementsByClassName("toggle-btn")[0]  
let navBar = document.getElementsByClassName("for-ul-men")[0]

toggleButton.addEventListener('click', () => {
navBar.classList.toggle('active')
})

