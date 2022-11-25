const saya = {
    name: "Galih",
    address: "jakarta Selatan",
    hobbies: ["football","video games"],
    sibling: {
        name: "tika",
        address: "Jakarta Selatan",
        hobbies: "sleeping",
    },
}
//console.log(saya);

//cara akses value dari data object
//console.log(saya.address); // print jakarta selatan
//console.log(saya.hobbies[1]); // print video games
//console.log(saya.sibling.name); //print tika

//cara merubah value pada prop pada object
saya.address = "Bogor";
//console.log(saya); // print jakarta selatan keganti bogor

// cara membuat object constructor

let you = new Object();
you.name ="indra";
you.address = "bandung";
you.hobbies ="fishing";

console.log(you);