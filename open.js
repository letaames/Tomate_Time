document.getElementById("setControls").addEventListener("click", openUp);

function openUp(){
    if (document.getElementById("section1").style.display !== "grid"){

        document.getElementById("section1").style.display = "grid";
        // document.getElementById("section1").classList.add("appear")
    }
    else {
        // document.getElementById("section1").classList.remove("appear");
        document.getElementById("section1").style.display = "none";
    }
    
}

