const billAmountString = document.querySelector("#bill-amount");
const cashGivenString = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    const billAmount = billAmountString.value;
    const cashGiven = cashGivenString.value;
    if (billAmount > 0) {
        if (cashGiven >= billAmount) {
            const amountToBeReturned = cashGiven - billAmount;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wash plates?");
        }
    } else {
        showMessage("Invalid bill amount");
    }
})

function hideMessage() {
    message.style.display = "none";

}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountToBeReturned) {
    //go over all the available

    for (let i = 0; i < availableNotes.length; i++) {

        //no of notes needed for the denomination
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        )

        //amount left after calculating the number of notes need
        amountToBeReturned = amountToBeReturned % availableNotes[i];

        //no of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }
}