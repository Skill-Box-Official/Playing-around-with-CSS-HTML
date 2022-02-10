 
var count = 0 ;
function increment(){         //defining an increment function
    count = count + 1;
    console.log(count); 
    document.getElementById("count").innerText = count;    // Telling to print count at the certain element declared in the html

}

function save(){
    console.log("The Previous Entries were: \n");
    console.log("-",count)
    document.getElementById("save").innerHTML += "0" + count + "-";  //Adding text adjacent to the element with save Id
}

function reset(){
    count = count - count;
    console.log("The Previous entries are cleared!")
    document.getElementById("count").innerText = 0;              // clearing the inputs taken in
}
