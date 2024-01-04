
// let counter = document.querySelector(".first").innerText = '0';


// function allSet() {
//     let x = 1;
//     x--;
//     console.log(x)
//     let menus = document.getElementById("manyCall");
//     menus.innerText = x;
// }

// let nameAll =document.getElementById("call").addEventListener('click', function(){
    // console.log(42)
    // let allLaps = [34 + 33 + 36];
    // console.log(allLaps)

    //creating a function that increemants the lapsCompleted variable with one//

    // let laps = 5;
    // let getLaps = 0;
    // getLaps = getLaps + 1;
    // alert(getLaps)
    // laps+=2;
    // console.log(laps)
    // console.log(laps)
    // console.log(laps)
    // let counter = 0;
    // counter++;
    // console.log(counter)
    // let counterNum = document.querySelector(".first");
    // counterNum.innerText = counter;
    // counterNum.innerHTML = counter +=1;
    // if (counter == 1){
        // counterNum.innerHTML = "3"
    // }else{
    //     counterNum.innerHTML = "false"
    // }

// })
// let cante = 0;
// let dataSave = document.getElementById('save-btn').addEventListener('click', function save(){
//     // var james = prompt('what is your name?');
//     // console.log(james);
//     // let name = 'Per'
//     // var message = "you have 3 new notifications"
//     // alert( name + " " + message);
//     // let messageToUser = name + " " + message;
//     // console.log(messageToUser);
//     let Name, Greeting, myGreeting;
//     Name = "Miracle";
//     Greeting = "hi, my name is "  + " " + Name;
//     myGreeting = Greeting;
//     alert(myGreeting)
//     //9,24, 51, 1001000//

// })
    // let WelcomeEl = document.querySelector(".welcomeAll")
    // let theirName = prompt('Enter your name');
    // theirName = theirName + '👏'
    // let thirGreeting = 'Welcome back';
    // // let emoji = '🙋‍♂️'
    // WelcomeEl.innerText = thirGreeting + " " + theirName;
    // //or//
    // // WelcomeEl.innerText = thirGreeting + " " + theirName + emoji; 
    // WelcomeEl.style.color = 'orange';

let elementIncrease = document.querySelector(".save-el");
count = 0;

function increamentAll(){
    count += 1;
    elementIncrease.innerText = count
}
    let activate = document.querySelector(".saveAll").addEventListener('click', function saveData(){
    let saveAllData = document.querySelector(".calculateNumEnter");
    console.log(saveAllData)
    var contentAll = count;
    console.log(contentAll);
    // let normalText = 'Previous enteries:'
    var randonNumbers = '-' + " " 
    console.log(randonNumbers)
    saveAllData.innerText +=  " " + contentAll + " " + randonNumbers;
    // saveAllData.innerText = normalText + " " + contentAll;
    console.log(saveAllData);
    elementIncrease.innerText = 0;
    console.log(elementIncrease.innerText);
    count = 0;

})