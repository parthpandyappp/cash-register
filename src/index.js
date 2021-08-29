const billInput = document.getElementById("bill");
const payedInput = document.getElementById("cash");
const formSubmit = document.getElementById("form-submit")
const noOfNotes = document.querySelectorAll(".num-of-notes");

// console.log(noOfNotes)

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const bill = Number(billInput.value);
    const payed = Number(payedInput.value);

    if (bill < 0) {
        alert("Bill is underflow. Enter valid billing amount.")
        return
    }

    else if (bill > payed) {
        alert("Enter valid cash amount. Billing amount is more than what you've paid.")
        return
    }


    let moneyToReturn = payed - bill;
    const notes = [2000, 500, 100, 20, 10, 5, 1];
    // let notes_counter = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < notes.length; i++) {

        let numberOfNotes = Math.trunc(moneyToReturn / notes[i])
        moneyToReturn = moneyToReturn % notes[i];
        noOfNotes[i].innerText = numberOfNotes;




        // function calcBillamount(change) {
        //     for (var i = 0; i < notes.length; i++) {
        //       const numberOfNotes = Math.trunc(change / notes[i]);
        //       change %= notes[i];
        //       numOfNotes[i].innerText = numberOfNotes;
        //     }
        //   }
    }

})