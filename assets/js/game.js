// Creating an array of names
var names = ["jacktheripper", "jefferydahmer", "johnwaynegacy", "hhholmes", "pedrolopez", "tedbundy", "edgein", "charlesmanson", "zodiac", "dennisrader", "garyridgway", "richardramirez", "aileenwuornos", "myrahindley"];
//generates random name from array also varibles
var name = ""
var choosenName = ""
var underScore = [];
var rightName = [];
var wrongName = [];
var attempts = 6;
var wins = 0;
var losses = 0;
//DOM manipulation 
var docUnderscore = document.querySelector('#underscore');
var docWins = document.getElementById('wins');
var docLosses = document.getElementById('losses');
//creates underscores for letters of name
var generateUnderscore = (choosenName) => {
    for (var i = 0; i < choosenName.length; i++) {
        underScore.push('_');

    }
    console.log(underScore)
    return underScore;
}

function game() {
    name = Math.floor(Math.random() * names.length)
    choosenName = names[name]
    underScore = [];
    rightName = [];
    wrongName = [];
    attempts = 12;
    docUnderscore.innerHTML = generateUnderscore(choosenName);
    // clean the screen of the wrong letters??? 
}

game()

//
//logs the key pressed
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyWord = String.fromCharCode(keycode);
    console.log(keyWord)
    //If answer is right    
    if (choosenName.indexOf(keyWord) > -1) {
        console.log(true);
        rightName.push(keyWord);
        for (var i = 0; i < choosenName.length; i++) {
            if (choosenName[i] === keyWord) {
                underScore[i] = keyWord;
                docUnderscore.innerHTML = underScore;
                console.log(underScore);
                console.log(rightName);
            }
        }
        if (underScore.join('') == choosenName) {
            alert("You win!");
            wins++;
            console.log("wins:", wins);
            docWins.innerHTML = "Wins: " + wins;
            alert(docWins.innerHTML);
            // add to wins and show wins on the screen
            for (var i = 0; i < choosenName.length; i++) {
                if (choosenName === keyWord) {
                    wins[i] = keyWord;
                    console.log(wins);
                }
            }
            // go to the next play
            game();

        }
    } else {
        // control attempts
        attempts--
        if (attempts === 0) {
            //add to losses and show on screen
            alert("lost");
            losses++; 
            console.log("losses " + losses)
            docLosses.innerHTML = "Losses: " + losses;
                    alert(docLosses.innerHTML);
            console.log("losses:", losses);   
           
            game();
        }
        else {
            wrongName.push(keyWord);
            for (var i = 0; i < choosenName.length; i++) {
                if (choosenName === keyWord) {
                    wins[i] = keyWord;
                    console.log(losses);
                 
                }
            }
            console.log(wrongName);

        }

    }
});

