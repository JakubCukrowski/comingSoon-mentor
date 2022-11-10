const email = document.querySelector("#email")
const submitBtn = document.querySelector(".submit-btn")
const pattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/
const infoSection = document.querySelector(".info")
const newP = document.createElement("p")

const handleBtnClick = (e) => {
    e.preventDefault()
    if (!email.value.toString().match(pattern)) {
        email.classList.add("error")
        e.target.classList.add("error")
        newP.textContent = "Please provide a valid email address"
        newP.style.color = "red"
        infoSection.append(newP)

    } else {
        newP.textContent = "You've successfully signed for our newsletter"
        newP.style.color = "limegreen"
        newP.style.textDecoration = "underline"
        infoSection.append(newP)
        email.value = ""
    }
}

const handleInputClick = (e) => {
    if (e.target === email) {
        email.classList.remove("error")
        submitBtn.classList.remove("error")
        e.target.value = ""
        newP.remove()
    }
}

submitBtn.addEventListener("click", handleBtnClick)
email.addEventListener("click", handleInputClick)
