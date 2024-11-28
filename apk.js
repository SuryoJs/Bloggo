// LOGIKA USER LOGIN t



let acUser = []

const saveStorage = () => {



    localStorage.setItem('acUser', JSON.stringify(acUser))




}

const daftarAccnt = () => {
    let user = document.getElementById("InUser").value.trim(); // Menghapus spasi di awal/akhir input
    let pass = document.getElementById("InPass").value.trim()

    // Ambil data user dari localStorage, jika kosong default ke array kosong
    let akses = JSON.parse(localStorage.getItem("acUser")) || [];

    // Cek apakah username sudah ada di localStorage
    let userExists = akses.some(acc => acc.username === user);

    if (userExists ) {

        alert("Username sudah terdaftar! Silakan gunakan username lain.");
    } 
    else if(document.getElementById("InPass").value.trim().length !== 10){
        alert("Password harus 10 karakter!");

    }
    else if (user === "" || pass === "") {
        alert("Username dan password tidak boleh kosong!");
    } else {
        // Tambahkan user baru ke array
        let newUser = {
            username: user,
            password: pass
        };
        akses.push(newUser); // Tambahkan ke array akses

        // Simpan kembali ke localStorage
        localStorage.setItem("acUser", JSON.stringify(akses));

        alert("Akun berhasil didaftarkan!");

        // Reset input form
        document.getElementById("InUser").value = "";
        document.getElementById("InPass").value = "";
    }
};








const loginAwal = () => {
    window.location.href = 'login.html'
}
// PR user belum bisa login pada akun yang dibuat !!!!!!
const loginAccnt = () => {
    let userIn = document.getElementById("InUser").value.trim()
    let passIn = document.getElementById("InPass").value.trim()
    let akses = JSON.parse(localStorage.getItem("acUser")) || [];
    let userExists = akses.some(acc => acc.username === userIn);
    let passwordExists = akses.some(acc => acc.password === passIn);







    if (userExists && passwordExists ) {
        document.getElementById("InUser").value = ""
        document.getElementById("InPass").value = ""
        window.location.href = "beranda.html"




    }
    else {
        alert("Akun belum terdaftar")
        document.getElementById("InUser").value = ""
        document.getElementById("InPass").value = ""
    }


}

//close kembali ke welcome page
const kembali = () =>{
    window.location.href ="index.html"
}












