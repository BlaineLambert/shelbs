const darkMode = document.getElementById("darkmode")
const body = document.body

darkMode.addEventListener('click', () => {
    if (body.style.backgroundColor === 'steelblue'){
        body.style.backgroundColor = 'darkslategrey'
        darkMode.style.backgroundColor = 'steelblue'
        darkMode.innerHTML = 'Light Mode'
    } else {
        body.style.backgroundColor = "steelblue"
        darkMode.style.backgroundColor = 'darkslategrey'
        darkMode.innerHTML = 'Dark Mode'
    }
})