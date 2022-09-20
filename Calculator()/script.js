let output = document.getElementById("output");
let button = Array.from(document.getElementsByClassName("button"));

button.map(button =>{
    button.addEventListener("click", (e) =>{
        switch(e.target.innerText){
            default:
            output.innerText += e.target.innerText;
            break;

            case "C":
            output.innerText = e.target.innerText.slice(0,-1);
            break;

            case "←":
            output.innerText = output.innerText.slice(0,-1);
            break;

            case "=":
            try{
                output.innerText = eval(output.innerText);
                break;
            }
            catch{
                output.innerText = "Invalid!";
            }
            break;
           
        }
    })
})

// dark mode

function darkMode() {
    let changeToDarkMode = document.body;
    changeToDarkMode.classList.toggle("light-mode");
 }