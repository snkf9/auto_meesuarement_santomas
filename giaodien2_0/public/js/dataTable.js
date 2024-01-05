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

function addNewRow1() {
    var table = $('#example_1').DataTable();

    var name = document.getElementById('toolName').value;
    var id_name = document.getElementById('tooltype').value;

    table.row.add( [
            name,
            id_name,
            'N/A',
            'N/A',
            'N/A'

            

     ] ).draw();

}

function addNewRow_partdata() {
    var table = $('#part_data').DataTable();


    var moldNo = document.getElementById('mold_no').value;
    var partName = document.getElementById('part_Name').value;
    var partNo = document.getElementById('part_No').value;
    var partLocation = document.getElementById('part_Location').value;
    var addDate = new Date();
    table.row.add( [
            id_counter,
            moldNo,
            partName,
            partNo,
            partLocation,
            addDate.toLocaleDateString()

            

     ] ).draw();
     id_counter++
}