/*const  cars = ["corolla","civic-turbo","bmw","mercedes-benz"];

const panjangCars = cars.length;
const ambilSatuIndex = cars[1];
const ambilBeberapa = cars.slice(1,3);
const keString = ambilBeberapa.join(" ")
console.log(ambilBeberapa);
console.log(keString);*/

/*
const cars2 = ["honda", "toyota", "suzuki", ["almaz","conferro","airev"]];

const accesConferro = cars2[3][1];
console.log(accesConferro);

// cara mengganti value/data dalam array
cars2[0] = "mazda"
//console.log(cars2);

//======================Array Method==============================
// Push ---> menambahkan data dan dimasukan diakhir array
const arrayPush = cars2.push("Nissan")
console.log(arrayPush);// print 5
console.log(cars2); // print cars array that include "Nissan".

//Pop --> mengambil index paling terakhir
//shift ---> mengambil index paling awal
//unishift --> memasukan data ke index paling awal
//concat --> menyatukan dua array




//=======================================================================
//=========================================================================
// Cari di variable cars2 mobil esemka. kalau ada bernilau true kalo gada bernilai false;


//includes --> untuk mencari keberadaan data, dg expected output true or false
const arrayIncludes = cars2.includes("esemka");
console.log(arrayIncludes); // print false

//Indexof
const arrayIndexof = cars2.indexOf("kijang");
console.log(arrayIndexof); // print -1, jika -1 maka data tersebut tidak ada dalam array tersebut. jika ada data tersebut maka akan menampilkan data tersebut berada di index berapa.
*/

//=======================================================================
const motors =["legenda","supra","rxking","kharisma"];
for(let i = 0; i <= motors.length; i++){
    console.log(motors[i]);
}

const data =[80,50,20,70,0];
let empatPuluhKeatas=[];
for (let a =0; a <= data.length ;a++ ){
    let result = data[a]
    if(result > 40){
        empatPuluhKeatas.push(result)
    } 
    }
   // console.log(empatPuluhKeatas);

    
//Looping dengan Map dan filter
// Map harus disimpan dalam variable
// Map berisi function
const scores =[10,50,70,80];
const print =scores.map(function (item){
    return item > 40;
})
console.log(print); // print boolean. kalo true angka tsb diatas angka 40 kalo false dibawah 40;
                    // (false,true,true,true)

//filter
//filter berisi function juga
// disimpan dalam variable jg
const cetak = scores.filter(function(item){
    return item ;
})
console.log(cetak); // print angka diatas 40 (50,70,80)