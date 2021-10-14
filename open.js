document.getElementById("setControls").addEventListener("click", openUp);


function openUp(){
    console.log(document.getElementById("section1").style.display)
    if (document.getElementById("section1").style.display !== "grid"){
        document.getElementById("section1").style.display = "grid";
    }
    else {
        document.getElementById("section1").style.display = "none";
    }
    
}

