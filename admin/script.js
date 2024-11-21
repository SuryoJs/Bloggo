const username = "admin703@gmail.com"
const password = "Admin703"

const lgn = () => {
    const user = document.getElementById("usr").value
    const pass = document.getElementById("pswd").value
    if (user === username && pass === password) {
        alert("Login Success")
        window.location.href = "dashboard.html"
    } else {
        alert("Login Gagal!")
        document.getElementById("usr").value = ""
        document.getElementById("pswd").value = ""
    }
}