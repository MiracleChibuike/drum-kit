
// A constructor function

function CalculateUserData(name, age, school, adress) {
    this.name = name;
    this.age = age;
    this.school = school;
    this.adress = adress;
}

var user1 = new CalculateUserData("Miracle", 25, "Solid Foundation", "Ikenegbu extension");
var user2 = new CalculateUserData("james", 27, "Old Boys College", "Arizona USA")

let clickAddAll = document.querySelectorAll(".ass").length;

for (let i = 0; i < clickAddAll; i++) {
   document.querySelectorAll(".ass")[i].addEventListener("click", function (){
    // alert("hi");
    // console.log(this.remove());
    console.log(user1)
   })
   
}



// console.log(dataM.value)


// clickAdd.addEventListener("click", ()=>{
//     clickAdd.innerHTML = user1.name + " " + user2.name;
// })
let dataM = document.getElementById("inputdata");

function yes() {
    // console.log(dataM.value)
    // console.log(json.parse(name));
    console.log(dataM.value);
}

const json = {
  "name": dataM.value,
  "school": "solid",
};
console.log(typeof json);
// console.log(json.school);
console.log(clickAddAll)

