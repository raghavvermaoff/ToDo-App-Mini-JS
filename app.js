let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", function() {
    let li = document.createElement('li');
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value="";

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "delete";

    li.appendChild(delbtn);

});

// let rembtns = document.querySelectorAll(".delete");
// for(rembtn of rembtns){
//     rembtn.addEventListener("click", function(){
//         let par =this.parentElement;
//         par.remove();
        
//     });

// }

ul.addEventListener("click",  function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})