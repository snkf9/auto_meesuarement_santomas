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
    var table = $('#dismesion_checkpoint_table').DataTable();


    table.row.add( [
            '<input type="text" id="cp1" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp2" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;" ></input>',
            '<input type="text" id="cp3" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp4" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp5" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp6" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp7" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp8" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp9" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp10" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="checkbox" id="cp11" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="checkbox" id="cp12" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="text" id="cp13" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp14" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="checkbox" id="cp15" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="text" id="cp16" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp17" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="checkbox" id="cp18" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="text" id="cp19" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp20" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp21" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>'

            // '<button type="button" class="btn green btn-xs select-row" data-id="7" data-includeTax="N">btn</button>'

     ] ).draw();

}

function addNewRow_a_checkpoint() {

    var table = $('#appearance_checkpoint_table').DataTable();


    table.row.add( [
            // '<input type="text" id="cp1" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            // '<input type="text" id="cp2" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;" ></input>',
            // '<input type="text" id="cp3" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            // '<input type="text" id="cp4" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            // '<input type="text" id="cp5" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            // '<input type="text" id="cp6" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp7" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp8" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp9" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp10" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="checkbox" id="cp11" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="text" id="cp9" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="checkbox" id="cp12" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="text" id="cp13" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp14" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="checkbox" id="cp15" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="text" id="cp16" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp17" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="checkbox" id="cp18" class"input_d_checkpoint" style="width: 30px; height: 30px "></input>',
            '<input type="text" id="cp19" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            '<input type="text" id="cp20" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>',
            //'<input type="text" id="cp21" class"input_d_checkpoint" style="width: 100%; font-size: xx-large;"></input>'

            // '<button type="button" class="btn green btn-xs select-row" data-id="7" data-includeTax="N">btn</button>'

     ] ).draw();

}