let output = document.getElementById("output");
let button = Array.from(document.getElementsByClassName("button"));
let clear = document.getElementById("clear");
let equal = document.getElementById("equal")

button.forEach(button =>{
    button.addEventListener("click",(e) =>{

        switch(e.target.innerText){
            case "←":
            output.innerText = output.innerText.slice(0,-1)
            break;

            default:
            output.innerText += e.target.innerText
            break;
           }
        
    })

    button.addEventListener("click",remove);
    equal.addEventListener("click",compute);
  
})

function remove (e){
if(e.target === clear){
output.innerText = "";
}
}

function compute(e){ 
 if(e.target == equal){
    output.innerText = eval(output.innerText); 

 }

}
