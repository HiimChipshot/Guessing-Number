
function myFunction() {
    let guessNumber = document.getElementById("guessNumber").value;
    let randomNumber = Math.round(Math.random() * 4) + 1;

    if ( guessNumber == randomNumber ) {    
        document.getElementById("rightAnswer").style.display = "block";
    } else {
        document.getElementById("rightAnswer").style.display = "none";
      
    }
    document.getElementById("yourAnswer").innerHTML = guessNumber;
    document.getElementById("myAnswer").innerHTML = randomNumber;
}

