var myCar = new Car();
var wifeCar = myCar;

var firstName;
var last_name;
var email;
var wheel4;

//Deklarasi & inisialisasi dalam satu baris 
var car_brand = 'Honda'

//Inisialisasi terpisah
var car_brand;
car_brand = 'Honda';

//semua dalam satu baris
var brand = 'honda',type='mpv', numberOfWheels = 4, price;

//baris terpisah (lebih baik daripada satu baris)
var brand = 'honda',
type='mpv',
numberOfWheels = 4,
price;

//notasi literal
var a = [1,2,3];
var obj = {};
var n = 123;

//notasi objek (tidak disarankan)
var a = new Array(1,2,3);
var obj = new Object();
var n = new Number(123);


/* Contoh 1: Menyematkan Variabel dengan Alert Box */
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>Belajar Variabel dalam Javascript</title>
// </head>
// <body>
// 	<h1>Variabel dan Nilainya</h1>
	
// 	<script>
// 		var name = "Pemrograman Berbasis Web";
// 		var visitorCount = 50322;
// 		var isActive = true;
		
// 		alert("Selamat datang di " + name);
		
// 		document.write("<p>Nama Situs: " + name + "</p>");
// 		document.write("<p>Jumlah Pengunjung: " + visitorCount + "</p>");
// 		document.write("<p>Status Aktif: " + isActive + "</p>");
		
// 		console.log(name, visitorCount, isActive);
// 	</script>
// </body>
// </html>


/* Contoh 2: Menyematkan Variabel dengan InnerHTML */
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>Belajar Variabel dalam Javascript</title>
// </head>
// <body>
// 	<h1>Variabel dan Nilainya</h1>
	
// 	<div id='result'></div>
	
// 	<script>
// 		let name = "Pemrograman Berbasis Web";
// 		let visitorCount = 50322;
// 		let isActive = true;
		
// 		const resultElement = document.getElementById('result');
		
// 		resultElement.innerHTML += `
// 		  <p>Nama Situs: ${name}</p>
// 		  <p>Jumlah Pengunjung: ${visitorCount}</p>
// 		  <p>Status Aktif: ${isActive.toString()}</p>`;
		  
// 	  console.log(name, visitorCount, isActive);
	  
// 	  // Alternatif dengan template literal (tidak direkomendasikan karena kurang fleksibel):
// 	  // resultElement.innerHTML = '<p>' + name + '</p><p>' + visitorCount + '</p>';
// 	  // ...
//    </script>
   
//    <!-- Juga bisa menggunakan alert -->
//    <button onclick="showAlert()">Show Alert</button>

//    <script>
//      function showAlert(){
//        alert(`Selamat datang di ${name}`);
//      }
//    </script>
// </body>
// </html>
