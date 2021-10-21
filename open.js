document.getElementById("setControls").addEventListener("click", openUp);

function openUp(){
    // preventDefault();
    if (document.getElementById("section1").style.display !== "grid"){

        document.getElementById("section1").style.display = "grid";
        // document.getElementById("section1").classList.add("appear")
    }
    else {
        // document.getElementById("section1").classList.remove("appear");
        document.getElementById("section1").style.display = "none";
    }
    
}

// document.getElementById("setControls").addEventListener("click", function() {
//     document.getElementsByClassName("container")[0].classList.add('open');
// }, function() {
//     // nothing here
// });


// document.getElementById("section1").addEventListener("click", function() {
//     document.getElementsByClassName("container")[0].classList.remove('open');
// });

// document.getElementById("setControls").addEventListener("click", openUp);

// function openUp(){
//     if (document.getElementById("section1").style.display !== "grid"){

//         document.getElementById("section1").style.display = "grid";
//         document.getElementById("section1").style.height = "auto";
//         // document.getElementById("section1").classList.add("appear")
//     }
//     else {
//         // document.getElementById("section1").classList.remove("appear");
//         document.getElementById("section1").style.display = "none";
//         document.getElementById("section1").style.height ="0";
//     }
    
// }

