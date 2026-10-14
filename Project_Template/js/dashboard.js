// BUOC 1: LAY DU LIEU MANG TU localStorage
let userList = JSON.parse(localStorage.getItem('userList'))||[];
// console.log(userList);

let pageHienthi = 1;
let soLuongHienThi = 5;

function renderUserList (){
    let startIndex = (pageHienthi-1)*soLuongHienThi;
    let endIndex = startIndex + soLuongHienThi;
    let users = userList.slice(startIndex,endIndex);


    document.getElementById('table-body').innerHTML = users.map(user=>`
    <tr>
       <td>${user.usercode||''}</td>
       <td>${user.username||''}</td>
       <td>${user.email||''}</td>
       <td>${user.role ||''}</td>
       <td>${user.birthday ||''}</td>
       <td>${user.status ||'Active'}</td>

       <td>
          <button onclick = "deleteUser('${user.usercode}')">Xoa</button>
          <button onclick = "editUser('${user.usercode}')"style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">Sua</button>

       </td> 
    </tr>
    `).join('');
}
// (dung ||[]phong khi du lieu chua ton tai. neu localStorage co du lieu 
    // thi ||[] duoc bo qua. Khi localStorage chua co du lieu thi lenh se lam cho 
    // ket qua ve null (trong rong)
    // Neu ko co duoi ||[] thi code se bi gan gia tri null, di xuong duoi lenh .map() hoac
    // filter() chay tren null se lam loi trang web

// neu co du lieu thi in ra , con neu ko co thi in ra chuoi rong 
// BUOC 3: TAO NUT XOA 

    // dung join der gom cac hang <tr></tr>trong mang lai, dinh lien voi nhau 
    // vaf chuoi HTML se duoc viet lien mach

    // BUOC 4: HAM XOA user theo id
    window.deleteUser = function(id){
        let list = JSON.parse(localStorage.getItem('userList'))||[];
        // loc du lieu ( dieu kien la id cua nguoi nay khac id cua nguoi kia)
        list = list.filter(user=> user.usercode !==id);
        // cap nhat lai du lieu(luu danh sach moi de len danh sach cu)
        localStorage.setItem('userList',JSON.stringify(list));
        renderUserList();
        alert("Xoa user thanh cong!");
    
        // render lai trang ( tranh truong hop du lieu thi da dc xoa nhung 
        // tren man hinh nguoi dung thi van thay id do)
       
    };
     renderUserList();  