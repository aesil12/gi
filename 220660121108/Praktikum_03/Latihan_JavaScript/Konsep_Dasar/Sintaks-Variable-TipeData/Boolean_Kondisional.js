var a = true;
typeof a; //boolean

//sama seperti Number, nilai boolean yang dibungkus //oleh tanda petik berubah menjadi string
var b = 'true';
typeof b; //string


/* LOGIKA */
/* Operator (!) */
var a = true;
console.log(a);//true
console.log(!a);//false

var b = false;
console.log(!b);//true


/* Logika AND (&&) */
var a = true;
var b = true;

console.log(a && b);//true

a = false;
console.log(a && b);//false

a = b = false;
console.log(a && b);//false

a = b = true;
var c = false;
console.log(a && b && c);//false


/* Logika OR (||) */
var a = true;
var b = true;

console.log(a || b);//true

a = false;
console.log(a || b);//true

a = b = false;
console.log(a || b);//false

b = true;
var c = false;
console.log(a || b || c);//true



/* PERBANDINGAN */
var myClass = function () {
	name: 'bob'
};

var myClass2 = function () {
	name: 'bob'
};

var a = new myClass();
var b = a;
var c = myClass2();

console.log(a == b); //true
console.log(a == c); //false
console.log(a === c); //false
console.log(a != b); //false
console.log(b !== c); //true

var d = '1';
var e = 1;

console.log(d == e); //true karena ada konversi tipe data 
console.log(d != e);//false karena ada konversi 
console.log(d === e); //false, tidak ada konversi 
console.log(d !== e);//true, tidak ada konversi

console.log( 1 > 2 );//false
console.log( 2 > 1 );//true
console.log( 2 >= 1 );//true
console.log( 1 <= 1 );//true

//kasus menarik, NaN tidak sama dengan apapun bahkan dirinya sendiri
console.log( NaN == NaN );//false


/* PERCABANGAN */
var a = 5;

function check(n) {
    console.log('----------');

    if (n > 0) {
        console.log(n + ' lebih besar dari 0');

    } else {
        console.log(n + ' tidak lebih besar dari 0')
    };

    if (n > a) {
        console.log(n + ' lebih besar dari ' + a);

    } else if (n < a) {
        console.log(n + ' kurang dari ' + a);

    } else {
        console.log(n + ' sama dengan ' + a);
    }
}


check(1);
check(10);
check(-1);
check(5);


/* TERNARY OPERATOR */
function check(c) {

    if (c > 0) {
        console.log('ok');
    } else {
        console.log('not ok');
    };

}


/* Swich-case */
switch (variabel yang diuji) {
    case kondisi pertama:

        //kode yang dieksekusi jika kondisi pertama terpenuhi break;//keluar dari switch-case
    case kondisi kedua:

        //kode yang dieksekusi jika kondisi kedua terpenuhi break
    default:

        //kode yang dieksekusi jika kondisi-kondisi di atas tidak //ada yang terpenuhi
}

/* .... */
function checkType(n) {
    console.log('-------');
    var status;
    var t = typeof n;

    switch (t) {
        case 'string':
            status = 'anda memasukkan string';
            break;
        case 'number':
            status = 'anda memasukkan angka';
            break;
        default:
            //jika t bukan string ataupun number
            status = 'anda memasukkan object';
    }
    console.log(status);
}

checkType('a'); //anda memasukkan string
checkType(100); //anda memasukkan angka
checkType('100'); //anda memasukkan string
checkType(null); //anda memasukkan object
checkType(undefined); //anda memasukkan object
checkType([1, 2, 3]); //anda memasukkan object



