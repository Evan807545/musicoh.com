const name = document.getElementById("name")
const name = document.getElementById("password")
const name = document.getElementById("form")
const errorElement = document.getElementById("error")
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push("Username is required")
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
})