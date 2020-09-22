let numToFind = Math.floor((Math.random() * 100) + 1);

document.getElementById("button").addEventListener("click", findNumber);
document.getElementById("button").addEventListener("click", function() {
    document.getElementById("input").value = ""
    document.getElementById("input").focus();
});
document.getElementById("input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
        document.getElementById("input").value = "";
    }

});


let count = 0;
count++;

function findNumber() {
    const guess = parseInt(document.getElementById("input").value);
    if (guess == null || isNaN(guess)) {
        document.getElementById("result").innerHTML = "Invalid entry";
    } else if (guess < numToFind) {
        document.getElementById("result").innerHTML = "Your guess is too low";
    } else if (guess > numToFind) {
        document.getElementById("result").innerHTML = "Your guess is too high";
    } else {
        if (count != 1) {
            alert("You are the winner :D You found the number after " + count + " tries!");
        } else {
            alert("You are the champion!!! You got it at your first try!");
        }
        if (confirm("Do you want to play again?")) {
            document.getElementById("result").innerHTML = "";
            count = 0;
        } else {
            document.getElementById("result").innerHTML = "Thanks for the game!";
            document.getElementById("count").innerHTML = "";
            count = 1;
            return;
        }
    }
    document.getElementById("count").innerHTML = ("Your guess count is " + count++);
}