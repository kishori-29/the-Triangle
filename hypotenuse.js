const sideInputs = document.querySelectorAll(".side")
const checkbtn = document.querySelector(".check-button")
const message = document.querySelector(".output");
message.style.display = "none";
// console.log("checking1");

function hypotenuseValue() {
    console.log("inside hypotenuse value function")
    const a = sideInputs[0].value;
    const b = sideInputs[1].value;
    const hypotenuse = Math.sqrt(a * a + b * b);
    // console.log(hypotenuse);
    showMessage("Hypotenuse is ", a, b, hypotenuse)
}

function showMessage(message1, a, b, hypotenuse) {
    message.style.display = "block";
    // console.log("in showmsg")        //to unhide message
    // console.log(hypotenuse)
    if (a && b) {
        if (a > 0 && b > 0) {
            message.innerText = message1 + hypotenuse;
        } else {
            message.innerText = "Enter positive values for sides";

        }
    }
    else {
        message.innerText = "Enter valid inputs!!😑";

    }
}

checkbtn.addEventListener('click', hypotenuseValue);
// && hypotenuse && (a > 0 && b > 0)