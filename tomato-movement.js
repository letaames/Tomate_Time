controlMove();

console.log("pom", isPom)

function controlMove() {
    if (isPom === false) {
        console.log(isPom);
        document.getElementsByClassName("x")[0].style.animationIterationCount = 0;
        document.getElementsByClassName("y")[0].style.animationIterationCount = 0;
        document.getElementById("tomatoContainer").classList.add("fadeOut");
        document.getElementById("tomatoContainer").classList.add("home");
        document.getElementById("tomatoContainer").classList.add("fadeIn");
    }
    else {
        document.getElementById("tomatoContainer").classList.add("fadeOut");
        document.getElementById("tomatoContainer").classList.remove("home");
        document.getElementById("tomatoContainer").classList.add("fadeIn");

        document.getElementsByClassName("x")[0].style.animationIterationCount = "infinite";
        document.getElementsByClassName("y")[0].style.animationIterationCount = "infinite";
    }
        
    
}