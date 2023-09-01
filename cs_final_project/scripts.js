console.log("Hello!");

//add border to body based on random num
//get the reference/handle
let frame = document.querySelector("body");
console.log(frame);

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
// apply the change
frame.style.border = "" + randomNum + "px" + " solid #94C5CC";

// add wavy underline to h1 depending on mouseover for all 4 pages
// make function, get references, and apply event too
function addWave(){
    let pageHeadings = document.getElementsByClassName("wave");
    console.log(pageHeadings);
    pageHeadings.style.textDecorationStyle = "wavy";
    pageHeadings.addEventListener("click", function(){
        removeWave(this);
    })
}


