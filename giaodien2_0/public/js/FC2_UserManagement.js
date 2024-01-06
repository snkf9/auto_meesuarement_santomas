// Danh sách người dùng
var admin = ["1","1","1"]
var user1 = ["user1","1","2"]
var user2 = ["user2","2","3"]
    
// Chương trình con
function login()
{
    var a = document.getElementById("inputuser").value;
    var b = document.getElementById("inputpass").value;
    var div=document.getElementById("user");
    var div_factory = document.getElementById("factory");
    // Admin
    if (a == admin[0] && b == admin[1])
    {
        fn_ScreenChange('Screen_Main','Screen_1','Screen_2','Partdata_screen', 'screen_empty');
        document.getElementById('id01').style.display='none';
        div.innerHTML ='Level 1';
        div_factory.innerHTML = 'SVN2';
        
    }
    // User 1
    else if (a == user1[0] && b == user1[1])
    {
        fn_ScreenChange('Screen_Main','Screen_1','Screen_2','Partdata_screen', 'screen_empty');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Screen_2").disabled = true;
        div.innerHTML ='Level 2';
        div_factory.innerHTML = 'SVN3';
    }
    // User 2
    else if (a == user2[0] && b == user2[1])
    {
        fn_ScreenChange('Screen_2','Screen_Main','Screen_1','Partdata_screen', 'screen_empty');
        document.getElementById('id01').style.display='none';
        document.getElementById("btt_Screen_Main").disabled = true;
        document.getElementById("btt_Screen_1").disabled = true;
        div.innerHTML ='Level 3';
        div_factory.innerHTML = 'SVN1';
    } 
    else
    {
        window.location.href = '';
    }
}
function logout() // Ctrinh logout
{   
    
    let choise= confirm("Bạn có muốn đăng xuất?");
    if (choise==true){
        window.location.reload();
    }
}

// Lấy giá trị của một input
function getValue(id){
    return document.getElementById(id).value.trim();
}
 
// Hiển thị lỗi
function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}

function validate()
{
    var flag = true;
     
    // 1 username
    var username = getValue('username');
    if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
        flag = false;
        showError('username', 'Vui lòng kiểm tra lại Username');
    }
     
    // 2. password
    var password = getValue('password');
    
    if (password == '' || password.length < 8 ){
        flag = false;
        showError('password', 'Vui lòng kiểm tra lại Password');
    }
     
    var factoryNumber = getValue('factoryNumber');

    if (factoryNumber <= 0 ||factoryNumber >3){
        flag = false;
        showError('factoryNumber', 'Vui lòng nhập lại nhà máy');
    }

    var factoryNumber = getValue('lever');

    if (factoryNumber <= 0 ||factoryNumber >3){
        flag = false;
        showError('lever', 'Vui lòng nhập lại lever');
    }
     
    return flag;
}