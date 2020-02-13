// Creating an array of names
var names = ["jacktheripper","jefferydahmer","johnwaynegacy","hhholmes","pedrolopez","tedbundy","edgein","charlesmanson","zodiac","dennisrader","garyridgway","richardramirez","aileenwuornos","myrahindley"];
//generates random name from array also varibles
var name = Math.floor(Math.random() * names.length);
var choosenName = names[name]
var underScore = [];
var rightName = [];
var wrongName = [];
//console.log (choosenName)

//DOM manipulation 
var docUnderscore = document.getElementsByClassName('underScore');



//creates underscores for letters of name
var generateUnderscore = () => {
    for (var i = 0; i < choosenName.length; i++) {
        underScore.push('_');

    }
    return underScore;
}

console.log (generateUnderscore());

//logs the key pressed
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyWord = String.fromCharCode(keycode);
    console.log(keyWord)
//If answer is right    
    if (choosenName.indexOf(keyWord) > -1 ) {
        console.log(true);
        rightName.push(keyWord);
        underScore[choosenName.indexOf(keyWord)] = keyWord;
        console.log(underScore)
        console.log(rightName);
        if (underScore.join('') == choosenName) {
            alert("You win!")
        }
    } else {
        wrongName.push(keyWord);
        console.log(wrongName);
        
    }
});

