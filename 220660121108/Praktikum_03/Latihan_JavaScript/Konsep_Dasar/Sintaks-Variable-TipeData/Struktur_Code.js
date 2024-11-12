/* STATEMENT */
// statement untuk mendefinisakan variable
const umur = 12;

// statement untuk menampilkan alert di browser
alert('Buku Saku JavaScript');

// statement untuk menulis sesuatu ke console browser
console.log('Selamat datang');

// statement untuk pengecekan kondisi
if (umur < 12) {
    console.log('Kamu masih kecil');
  } else {
    console.log('Kamu sudah besar');
  }


/* TITIK KOMA / SEMICOLONS */
const umur = 12;
console.log(umur);


// contoh pada conditional statement

if (umur < 12) {
  
} else {
  
}  // <-- tidak perlu ada titik coma disini

switch (umur) {
  case:
  default:
     
} // <-- tidak perlu ada titik coma disini


// contoh pada loop

for (let i = 0; i < 5; i++) {

} // <-- tidak perlu ada titik coma disini

while (true) {

} // <-- tidak perlu ada titik coma disini


// contoh pada function

function printName() {

} // <-- tidak perlu ada titik coma disini

class Animal {

} // <-- tidak perlu ada titik coma disini

/* .............. */ 
alert("Hello world")

['Budi', 'Agus', 'Ujang'].forEach(name => alert(name));  

// error: Uncaught TypeError: Cannot read properties of undefined (reading '2')


/* COMMMENTS */
/*
  ini adalah untuk check kondisi status usia berdasarkan umur
  dari seseorang.
    
  Outputnya hanya ada 2 yatu *kecil* atau *besar* saja
*/
if (umur < 12) {
    console.log('Kamu masih kecil');
  } else {
    console.log('Kamu sudah besar');
  }
  
  // check kondisi cuaca
  if (cuaca === 'hujan') {
    console.log('Dirumah sajalah');
  }
  
  // contoh comment yang lebih advance, untuk dokumentasi internal
  
  /**
  * fungsi untuk menghitung luas persegi
  * 
  * @param {number} panjang, panjang dari persegi
  * @param {number} lebar, lebar dari persegi
  * @return {number} luas persegi
  */
  function luasPersegi(panjang, lebar) {
    return panjang * lebar;
  }


// non-aktifkan sementara, kita ganti dengan yg baru

/*
function luasPersegi(panjang, lebar) {
  return panjang * lebar;
}
*/

// tanggal update: 3 Jan 2023 oleh Budi K

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  }