function conditional(){
   // alert("Use Inspect to see the console");
    var currentHour = new Date().getHours();
    if(currentHour < 10){
        alert("Good Morning!");
    }
    else if(currentHour < 18){
        alert("Good Morrow")
    }
    else{
        alert("Good Evening")
    }
}

function evalNumber(parameters){
    var inputValue = Number(prompt("Enter any five digit number without commas"));
    var ans;
    if (isNaN(inputValue)){
        alert(inputValue + " is not a number");
    }
    else if (inputValue % 2 == 0){
        alert(inputValue + " is and even number");
    }
    else{
        alert(inputValue + " is an odd number");
    }
}

function howdy(yourFirstName){
    alert("Howdy "+ yourFirstName);
}

function changeTitle(){
    let selectedElement = document.getElementById('programCard1');
    console.log(selectedElement);
    selectedElement.innerText="DIGS Student";
}

function getMinute(){
    var num = new Date().getMinutes();
    let selectedElement = document.getElementById("timeBody");
    console.log(selectedElement);
    selectedElement.innerText=num;
}

function eliminateCard(){
    let selectedElement = document.getElementById('programCard2');
    console.log(selectedElement);
    selectedElement.style.display = "none";
}

function sorter(list){
    let selectedElement = document.getElementById("fruitBody");
    list.sort();
    selectedElement.innerText = list[list.length-1];
}