const form = document.querySelector("form")
const inputEmail = document.querySelector("input")
inputEmail.addEventListener("change", () => {

    console.log(inputEmail.value)
    const sendLocalStorage = (value) => {

        localStorage.setItem("email", value)
    }
    form.addEventListener("submit", sendLocalStorage(inputEmail.value))
})