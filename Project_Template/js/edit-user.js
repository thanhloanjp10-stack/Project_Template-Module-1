// VI DU MUON EDIT PHAN TU DAU TIEN , CO VI TRI INDEX LA O 
// BUOC 1: LAY DANH SACH TREN localStorage
let currentUsers = JSON.parse(localStorage.getItem('userList')) ||[];
// console.log(currentUsers);

// BUOC 2: CHI DINH LAY LUON USER O VI TRI DAU TIEN  
let editUser = currentUsers[0];

// BUOC 3: HIEN THI THONG TIN CUA NGUOI DUNG LEN CAC O INPUT 
document.getElementById('user-code').value = editUser.usercode;
document.getElementById('username').value = editUser.username;
document.getElementById('email').value = editUser.email;
document.getElementById('password').value = editUser.password;
document.getElementById('role').value = editUser.role;
document.getElementById('dob').value = editUser.birthday;
//

// BUOC 4: TAO SU KIEN KHI BAM NUT LUU 
let editForm = document.getElementById('edit-user-form');
 editForm.addEventListener('submit',function(e){
    e.preventDefault();

// BUOC 4.1: LAY GIA TRI CUA CAC O INPUT

let usernameValue = document.getElementById('username').value;
let emailValue = document.getElementById('email').value;
let passwordValue = document.getElementById('password').value;
let roleValue = document.getElementById('role').value;
let dobValue = document.getElementById('dob').value;

// BUOC 4.2 DUNG REGEX KIEM TRA DINH DANG EMAIL

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
if( passwordValue.length===0){
    alert("Mat khau khong duoc de trong");
    return;
}
if( passwordValue.length<8){
    alert("Mat khau phai co toi thieu 8 ky tu");
    return;
}
if (/[0-9]/.test(passwordValue)===false){
    alert("Mat khau phai bao gom ca chu so");
    return;
}
if(/[A-Z]/.test(passwordValue)===false || /[a-z]/.test(passwordValue)===false){
    alert("Mat khau phai co ca chu hoa va chu thuong");
    return;
}
// if ( /[0-9]/.test(passwordValue)===false|| /[a-z]/.test(passwordValue)===false){
//     alert("Mat khau phai chua ca chu hoa va chu thuong");
//     return;

// BUOC 5:TAO USER MOI VOI THONG TIN MOI NHAP
editUser.username = usernameValue;
editUser.email = emailValue;
editUser.password = passwordValue;
editUser.role = roleValue;
editUser.birthday = dobValue;

// TIM VI TRI CUA USER CAN EDIT VA CAP NHAT THONG TIN MOI
let index = currentUsers.findIndex(function(user){
    return user.usercode === editUser.usercode;
});
if (index !== -1){
    currentUsers[index] = editUser;
}else{
   currentUsers = editUser; 
};

// BUOC 6: LUU DU LIEU MOI LEN localStorage
localStorage.setItem('userList',JSON.stringify(currentUsers));

// BUOC 7:THONG BAO THANH CONG VA DIEU HUONG TRANG 
alert ("Da cap nhat thong tin thanh cong!");
window.location.href ="dashboard.html"


})

// phai lam ca deleted



