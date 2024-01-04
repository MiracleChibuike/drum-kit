// Create an object that contains the detail of a bailboy


let bailBoyDetails = {
    name: "Bailboy",
    bellboyAge: "19years",
    bellboyHasWorkPermit: "true",
    bellboyLanguages: ['English', 'French', 'Igbo'],

    moveBox: function(){
        alert("Move my suitcase");
    }
}
console.log(bailBoyDetails.moveBox);

const btn = document.querySelector(".Excecute");
btn.addEventListener("click", ()=>{
   alert(bailBoyDetails.moveBox())
})
// btn.addEventListener("click", moveBox)
let bellname = document.querySelector(".bell")
bellname.innerHTML = bailBoyDetails.bellboyLanguages;

var id = document.querySelector(".identity");
id.innerHTML = bailBoyDetails.name;
console.log(bailBoyDetails);

function HouseKeeper (name, age, languages){
    this.name = name;
    this.age = age;
    this.languages = languages;
    this.moveSuitcase = function (){
        alert("May I move your suitcase please")
    }
    // console.log(HouseKeeper2.languages)
}

    var houseKeeper1 = new HouseKeeper("James", 25, ["English", "Igbo"]);
        var houseKeeper2 = new HouseKeeper("Samuel", 30, ["French"])

// id.addEventListener("click", HouseKeeper);
console.log(houseKeeper1)
console.log(houseKeeper2);
houseKeeper1.moveSuitcase();
// console.log(HouseKeeper.moveSuitcase())

// This is awesome