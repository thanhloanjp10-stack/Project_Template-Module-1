// lAY FORM DANG KY 
let form = document.getElementById('sign-up-form');
form.addEventListener('submit',function(e){
    e.preventDefault();

// LAY GIA TRI TU CAC O NGUOI DUNG NHAP 
let email = document.getElementById('email').value.trim();
let user = document.getElementById('username').value.trim();
let pass = document.getElementById('password').value.trim();
// console.log(email,user,pass);

// KIEM TRA DINH DANG EMAIL
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email.length===0){
    alert("Email khong duoc de trong");
    return;
    // return de dung lai ko chay tiep xuong duoi 
}
if (emailRegex.test(email)=== false){
    alert("Email sai dinh dang");
    return;
}
// kiem tra username
if (user.length ===0){
    alert("Username khong duoc de trong");
    return;
}
// kiem tra password
if( pass.length===0){
    alert("Mat khau khong duoc de trong");
    return;
}
if( pass.length<8){
    alert("Mat khau phai co toi thieu 8 ky tu");
    return;
}
if (/[0-9]/.test(pass)===false){
    alert("Mat khau phai bao gom ca chu so");
    return
}
if(/[A-Z]/.test(pass)===false || /[a-z]/.test(pass)===false){
    alert("Mat khau phai co ca chu hoa va chu thuong");
}
// if ( /[0-9]/.test(pass)===false|| /[a-z]/.test(pass)===false){
//     alert("Mat khau phai chua ca chu hoa va chu thuong");
//     return;

// LAY DANH SACH NICK DA DANG KY TU MAY (localStrorage)
let currentUsers = JSON.parse(localStorage.getItem('users')) ||[];

// TAO DOI TUONG NGUOI DUNG MOI 
let newUser = {
   usercode:'U001',
   username:user,
   email:email,
   password:pass,
   role:"admin",
   birthday:"1997-07-05",
   status:"Deactive",
   description:"Nguoi dung moi dang ky"
};
// console.log(newUser);

// THEM VAO MANG VA LUU TREN LocalStorage
currentUsers.push(newUser);
localStorage.setItem('users',JSON.stringify(currentUsers));
// neu tat ca dung 
alert("Dang ky thanh cong!");
// chuyen huong trang
window.location.href = "sign-in.html"
});

let passwordInput = document.getElementById('password');
let eyeOpenIcon = document.querySelector('.fa-eye');
let eyeCloseIcon = document.querySelector('.fa-eye-slash');

if (eyeOpenIcon && eyeCloseIcon) {
    eyeOpenIcon.addEventListener('click', function() {
        passwordInput.type = 'text';
        eyeOpenIcon.style.display = 'none';
        eyeCloseIcon.style.display = 'inline';
    });
    eyeCloseIcon.addEventListener('click', function() {
        passwordInput.type = 'password';
        eyeOpenIcon.style.display = 'inline';
        eyeCloseIcon.style.display = 'none';
    });
}