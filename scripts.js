const randomNumber = Math.floor(Math.random() * 100) + 1;

function numberCheck(){
    const guess = parseInt(document.getElementById('guess').value)
    if( guess === randomNumber){
        document.body.style.backgroundColor = "green";
        addImage();
        setTimeout(function() {alert("YOU WON!!")},100);
    } else if(
        guess < randomNumber) {
            alert("The correct number is higher");
            document.body.style.backgroundColor = "red";
        } else {
            alert ("The correct number is lower");
            document.body.style.backgroundColor = "red";
        }
     
        
    
}

function addImage(){
    const gameContainer = document.getElementById("game-container")
    const img = document.createElement(`img`);
    img.src = "assets/djkhaled.gif";
img.alt = `Winning image`;
gameContainer.appendChild(img);
img.style.width = "400px"
img.style.borderRadius = "10%"
}

console.log(randomNumber)






