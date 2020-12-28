// Create an array named list to store pour to-do activities
var listOfActivities=[];

// Create a DOM variable named inut to get the to-do activities added from HTMl form
var input = document.getElementById("input");

var toDoList = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click(){
    listOfActivities.push(input.value);

    console.log(listOfActivities);
    
    input.value=""
    
    showList();
}

function showList(){
    toDoList.innerHTML="";

    listOfActivities.forEach(function(current_value, index){

        toDoList.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")'>&times |</a></li")
    })
}

function editItem(index){
    var newValue=prompt("Please insert your new value");

    listOfActivities.splice(index,1,newValue);

    showList();
}

function deleteItem(index){
    listOfActivities.splice(index,1);

    showList();
}