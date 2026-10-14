// BUOC 1: LAY FORM DANG KY 
let form = document.getElementById('add-new-user-form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    // BUOC 2: LAY GIA TRI TU CAC O NGUOI DUNG NHAP (GIU NGUYEN GOC)
    let email = document.getElementById('email').value;
    let usernameValue = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // BUOC 3: TAO KHUON REGEX DE KIEM TRA TRONG CHO USER
    let stringRegex = /^.+$/;
    if( stringRegex.test(usernameValue)===false ){
        alert("Username khong duoc de trong");
        return;
    }

    // BUOC 4: KIEM TRA DINH DANG EMAIL BANG REGEX
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)===false){
        alert("Email sai dinh dang hoac dang de trong");
        return;
    }

    // BUOC 5: KIEM TRA DO DAI MAT KHAU BANG REGEX( TOI THIEU 8 KY TU )
    let passRegex = /^.{8,}$/;
    if(passRegex.test(password)===false){
        alert("Mat khau phai co toi thieu 8 ky tu tro len");
        return;

    // BUOC 6: TAO RA MA USER DUY NHAT (UNIQUE)
    let id = "idUnique" + Date.now();

    // BUOC 7:GOM THONG TIN THANH OBJECT ROI LUU VAO localStrorage
    let userObject = {
        usercode:id,
        username:usernameValue,
        email:email,
        password:password
    };
    // BUOC 7.1: LAY DANH SACH USER CU TU localSrorage
    // ( NEU CHUA CO THI TU TAO MANG RONG)
    let currentUsers = JSON.parse(localStorage.getItem("userList")) ||[];

    // BUOC7.2: THEM USER MOI VAO MANG DANH SACH 
    currentUsers.push(userObject);

    // BUOC 7.3: CHUYEN MANG THANH CHUOI JSON ROI LUU LAI VAO localStrorage
    localStorage.setItem("userList",JSON.stringify(currentUsers));
    alert("Dang ky user thanh cong!");

    // BUOC 7.4: DIEU HUONG NGUOI DUNG VE TRANG DASHBOARD DE XEM DANH SACH MOI CAP NHAT
    window.location.href="dashboard.html";
}
});