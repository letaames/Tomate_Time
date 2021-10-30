controlMove();

// console.log("pom", isPom)

function controlMove() {
    if (isPom === false) {
        console.log(isPom);
        // document.getElementById("tomatoSVG").classList.remove("bounce");
        
        document.getElementById("tomatoBox").classList.remove("rotate");
        // document.getElementById("tomatoSVG").classList.remove("scaleDown");
        // document.getElementsByClassName("y")[0].style.animationIterationCount = 0;
        // document.getElementById("tomatoSVG").classList.remove("scaleDown");
        // document.getElementById("tomatoSVG").classList.add("home");
        // document.getElementById("tomatoSVG").classList.add("fadeIn");
    }
    else {
        console.log(isPom);
        // document.getElementById("tomatoSVG").classList.add("bounce");
        
        document.getElementById("tomatoBox").classList.add("rotate");
        // document.getElementById("tomatoSVG").classList.add("scaleDown");
        // document.getElementById("tomatoSVG").style.animationDuration = pomTime + "s";
        // document.getElementById("tomatoSVG").classList.add("scaleDown");
        
        // document.getElementsByClassName("y")[0].style.animationIterationCount = 0;
        
//         document.getElementById("tomatoSVG").classList.add("fadeOut");
//         document.getElementById("tomatoSVG").classList.remove("home");
//         document.getElementById("tomatoSVG").classList.add("fadeIn");

//         document.getElementsByClassName("x")[0].style.animationIterationCount = "infinite";
//         document.getElementsByClassName("y")[0].style.animationIterationCount = "infinite";
    }
        
    
}