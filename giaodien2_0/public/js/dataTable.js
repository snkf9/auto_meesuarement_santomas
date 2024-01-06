///Hàm thêm hàng tại bảng user
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
            // '<button type="button" class="btn green btn-xs select-row" data-id="7" data-includeTax="N">btn</button>'

     ] ).draw();

}


 

 
// document.querySelector('#addRow').addEventListener('click', addNewRow);
 
// // Automatically add a first row of data
// addNewRow();


/////Hàm thêm hàng tại bảng thiết bị
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


///Hàm thêm hàng tại bảng part
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


function addNewRow_d_checkpoint() {
    var table = $('#appearence_checkpoint_table').DataTable();


    table.row.add( [
            '<input type="text" id="cp1" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp2" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp3" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp4" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp5" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp6" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp7" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp8" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp9" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp10" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp11" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp12" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp13" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp14" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp15" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp16" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp17" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp18" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp19" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp20" style="width= 200px; height=50px"></input>',
            '<input type="text" id="cp21" style="width= 200px; height=50px"></input>',

            // '<button type="button" class="btn green btn-xs select-row" data-id="7" data-includeTax="N">btn</button>'

     ] ).draw();

}