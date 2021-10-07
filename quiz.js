const qForm = document.querySelector(".quizform")
const message = document.querySelector(".output")
const submitAns = document.querySelector(".submit-ans")
message.style.display = "none";

const correctAns = ["180°", "Acute", "Right", "Equilateral", "60°"];

function displayOutput() {
    let index = 0;
    let score = 0;
    const formContent = new FormData(qForm);
    // to fetch content selected by user from form and store in array format.
    // console.log(formContent)
    // if (formContent === undefined) {
    //     score = -1;
    //     showMessage("You have to select field first!!", score)
    // }
    for (let entryVal of formContent.values()) {
        // if iterating through each entries instead of .values and then=> console.log(entryVal);  output will be like['Q1', '45°'],['Q2', 'Right'].
        console.log(entryVal);
        if (entryVal === correctAns[index]) {
            score = score + 10;
        }
        index = index + 1;
    }
    // console.log(score)
    showMessage("Your score is ", score)
}
function showMessage(message1, score) {
    message.style.display = "block";
    // console.log("in showmsg")        //to unhide message
    if (score === -1) {
        message.innerText = message1;

    } else {
        if (score == 0) {
            message.innerText = "Oops " + message1 + score + " out of 50. You need to study first!";
        }
        else {
            message.innerText = message1 + score + " out of 50 !! 🙂"
        }
    }

}

submitAns.addEventListener('click', displayOutput)