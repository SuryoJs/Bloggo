const username = "admin703@gmail.com"
const password = "Admin703"


const tutupGagal = () => {
    // mengubah posisi toast ketika tombol ditekan
    document.getElementById("toastGagal").style.top = "-50px"
}

const tutupBerhasil = () => {
    // mengubah posisi toast ketika tombol ditekan
    document.getElementById("toastBerhasil").style.top = "-50px"
    window.location.href = "dashboard.html"
}

const lgn = () => {
    const user = document.getElementById("usr").value
    const pass = document.getElementById("pswd").value
    if (user === username && pass === password) {
        document.getElementById("toastBerhasil").style.top = "5px"
    } else {
        document.getElementById("toastGagal").style.top = "5px"
        document.getElementById("usr").value = ""
        document.getElementById("pswd").value = ""
    }
}

const showTemplate = () => {
    document.getElementById("template").style.top = "72px"
    document.getElementById("user").style.top = "-1000px"
    document.getElementById("profile").style.top = "-1000px"
}
const showUser = () => {
    document.getElementById("user").style.top = "72px"
    document.getElementById("template").style.top = "-1000px"
    document.getElementById("profile").style.top = "-1000px"
}
const showProfile = () => {
    document.getElementById("profile").style.top = "72px"
    document.getElementById("template").style.top = "-1000px"
    document.getElementById("user").style.top = "-1000px"
}

const logout = () => {
    window.location.href = "login.html"
}
