setTimeout(() => {
    const container = document.getElementById("header-container")
    container.style.opacity = 1
}, 1000)

setTimeout(() => {
    const overlay = document.getElementById("overlay")
    overlay.style.opacity = 1
}, 2000)

setInterval(() => {
    const header = document.getElementById("top-header")
    let className = header.className
    if (header.className === "makeSmaller") {
        header.className = "makeBigger"
    } else {
        header.className = "makeSmaller"
    }
}, 1000)