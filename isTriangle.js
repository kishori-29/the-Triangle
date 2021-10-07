const angleInputs = document.querySelectorAll(".angle-input")
const checkbtn = document.querySelector(".check-angle")
const message = document.querySelector(".output-triangle");
message.style.display = "none";
function isTriangleOrNot() {
    const sum = sumOfAngle(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
    // console.log(sum);
    if (Number(angleInputs[0].value) && Number(angleInputs[1].value) && Number(angleInputs[2].value) && (Number(angleInputs[0].value) > 0 && Number(angleInputs[1].value) > 0 && Number(angleInputs[2].value > 0))) {
        if (sum === 180) {
            showMessage("Wow!! Given angles can form a Triangle!!🤩");
        }
        else {
            showMessage("Oops! Given angles can not form Triangle!☹️");
        }
    } else {
        showMessage("Invalid Input!!😑");
    }
}
function sumOfAngle(a1, a2, a3) {
    const s = a1 + a2 + a3;
    return s;
}
checkbtn.addEventListener('click', isTriangleOrNot);


function showMessage(message1) {
    message.style.display = "block";
    // console.log("in showmsg")        //to unhide message
    message.innerText = message1;
}
