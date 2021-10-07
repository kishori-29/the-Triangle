const baseAndHeight = document.querySelectorAll(".input-area")
const calculatebtn = document.querySelector(".calculate-area")
const message = document.querySelector(".output")
message.style.display = "none";
console.log("print1");

function displayArea() {
    const b = Number(baseAndHeight[0].value);
    //converting string to number datatype.
    const h = Number(baseAndHeight[1].value);
    // console.log(b, h);
    const area = 0.5 * b * h;
    showMessage("Area of Triangle having base ", b, h, area)

}

function showMessage(message1, b, h, area) {
    message.style.display = "block";
    // console.log("in showmsg")        //to unhide message
    if (b && h) {
        message.innerText = message1 + b + " and height " + h + " is " + area + " square units.";

    } else {
        message.innerText = "Please enter valid inputs!😑";
    }
}

calculatebtn.addEventListener('click', displayArea)