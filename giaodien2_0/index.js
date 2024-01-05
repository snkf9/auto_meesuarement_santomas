// Khai báo tag
var tagArr = [];
var tag_data;
// /////////////////////////THIẾT LẬP KẾT NỐI WEB/////////////////////////
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
// Home calling
app.get("/", function(req, res){
    res.render("home")
});



// // ///////////LẬP BẢNG TAG ĐỂ GỬI QUA CLIENT (TRÌNH DUYỆT)///////////
// function fn_tag(){

//     io.sockets.emit("m_data", tagArr[0]);
// }
// // ///////////GỬI DỮ LIỆU BẢNG TAG ĐẾN CLIENT (TRÌNH DUYỆT)///////////
// io.on("connection", function(socket){
//     socket.on("Client-send-data", function(data){
//     fn_tag();
// });});
// //Đọc dữ liệu
// var tagArr = [];
// function fn_tagRead(){
//     iotGateway.read(TagList).then((data)=>{
//         var lodash = require('lodash');
//         tagArr = lodash.map(data, (item) => item.v);
//         console.log(tagArr);
//     });
// }

// /////////////////////////QUÉT DỮ LIỆU////////////////////////
// // Tạo Timer quét dữ liệu
// setInterval(
// 	() => fn_read_data_scan(),
// 	1000 //100ms = 1s
// );

// // Quét dữ liệu
// function fn_read_data_scan(){
// 	//serial_port();	// Đọc giá trị tag
// }


//Đọc dữ liệu từ thước
// const { SerialPort, ReadlineParser } = require('serialport');
// const { ByteLengthParser } = require('@serialport/parser-byte-length');
// const parser = new ReadlineParser({delimiter: '/r/n'});
// const config = {
//   path: 'COM5',
//   baudRate: 57600,
//   dataBits: 8,
//   parity: 'none',
//   stopBits: 1,
//   autoOpen: true,
// };
// const port = new SerialPort(config);
// port.open((err) => {
//   if (err) {
//     console.log('error opening the port' + err.messages);
//   }
// });
// port.write('Hi From Node js', (err) => {
//   if (err) {
//     console.log('Error writing ' + err.message);
//   }
// });

// port.pipe(parser);
// parser.on('data', (data) => {
//   // console.log(data.toString());
//   document.getElementById("ex").innerHTML=data;
//   document.querySelector('#div_data').innerHTML=data;
//   tag_data= data;
// });


