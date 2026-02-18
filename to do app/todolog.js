const inputbox = document.querySelector(".inputbox");
const listcontainer = document.querySelector("#list-container");

function addtask(){
    if (inputbox.value == ""){
        alert("empty write somethinkg...")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


       
    }
    inputbox.value="";
    savedata();


}


listcontainer.addEventListener("click" , (e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})

function savedata(){
    localStorage.setItem("data" , listcontainer.innerHTML);
}

function show(){
    listcontainer.innerHTML = localStorage.getItem("data")
}

show();


