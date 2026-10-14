// B1 TIM FORM DANG NHAP DUA VAO ID TRONG FILE HTML
const form = document.getElementById ('sign-in-form');

// B2 LANG NGHE SU KIEN KHI NGUOI DUNG AN NUT DANG NHAP 
form.addEventListener('submit',function(e) {
    // chan ko cho trang tu dong tai lai 
    e.preventDefault();

// B3 LAY DU LIEU INPUT TU NGUOI DUNG NHAP 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

// B4 KIEM TRA TRONG : NEU 1 TRONG 2 O BI BO TRONG 
    if (email===""|| password ===""){
        alert("Email va mat khau khong duoc de trong!");
        // dung lai de ko chay tiep ben duoi
        return ;
    }

// B5 KIEM TRA TAI KHOAN (SO SANH VOI TAI KHOAN DA DANG KY TRUOC DO)
// B5.1 LAY DANH SACH NICK DA DANG KY TU MAY (localStorage)
  const userList = JSON.parse(localStorage.getItem('users'))||[];

// B5.2 TIM XEM CO NICK NAO KHOP CA EMAIL VA PASSWORD KHONG
  const taikhoanDung = userList.find(user=>user.email === email && user.password===password);

  if (taikhoanDung){
    // NEU DUNG: THI BAO DANG NHAP THANH CONG VA DIEU HUONG SANG DASHBOARD
  alert("Dang nhap thanh cong!");
  window.location.href="./dashboard.html";
  } else {
    // NEU SAI: HIEN THI EMAIL HOAC MAT KHAU KHONG TON TAI
    alert("Email hoac mat khau khong ton tai!");
  }
    
});