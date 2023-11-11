const inputBox= document.getElementById("inputBox");
const listContainer= document.getElementById("listContainer");

function addWork(){

    if(inputBox.value==""){
        alert("Kuch add kr bsdk");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
         li.appendChild(span);
    }

   inputBox.value="";
   //save the updated data in the browser
   saveTask();
}


//For deleting the list 
//For checking or unchecking the list
listContainer.addEventListener("click",function(e){

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);


//for saving the data in the browser
function saveTask(){
    localStorage.setItem("data"/*random name*/ , listContainer.innerHTML);
}

//when we revisit we want our data to display again

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}

showTask();






