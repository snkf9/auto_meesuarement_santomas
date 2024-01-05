function addNewRow() {
    var table = $('#example').DataTable();

    var name = document.getElementById('addName').value;
    var id_name = document.getElementById('id_svn').value;
    var dept = document.getElementById('dept').value;
    var fac = document.getElementById('factory1').value;
    var level = document.getElementById('level').value;    
    var passw = document.getElementById('pass').textContent;
    table.row.add( [
            name,
            id_name,
            dept,
            fac,
            level
            

     ] ).draw();

}


 

 
// document.querySelector('#addRow').addEventListener('click', addNewRow);
 
// // Automatically add a first row of data
// addNewRow();

