function choseWord(){
    let words = ["איפור","מיטות","מקלחת","קליפס","מברשת","בוקסה","מחברת","עפרון","מקלדת","טלפון","תמונה","מכחול","חליפה"
        ,"כותנה","שולחן","ספרים","שמיכה","מנורה","מחליק","פרחים"]
    chosenWord =words[(Math.random() *19).toFixed()]
    document.getElementById("chosen word").innerText= chosenWord;
}
id0 = "0"
id1 = "1"
id2 = "2"
id3 = "3"
id4 = "4"
function lettersToTextBox(string) {
    flag=false
    box1 = document.getElementById(id0).innerText;
    box2 = document.getElementById(id1).innerText;
    box3 = document.getElementById(id2).innerText;
    box4 = document.getElementById(id3).innerText;
    box5 = document.getElementById(id4).innerText;
    if (box1 === "") {
        document.getElementById(id0).innerText = string;
        lastLetter = id0
    } else if (box2 === "") {
        document.getElementById(id1).innerText = string;
        lastLetter = id1
    } else if (box3 === "") {
        document.getElementById(id2).innerText = string;
        lastLetter = id2
    } else if (box4 === "") {
        document.getElementById(id3).innerText = string;
        lastLetter = id3
    } else if (box5 === "") {
        document.getElementById(id4).innerText = string;
        box5 =string
        lastLetter = id4
    }

}
function addFive(stringId){
    stringId = Number(stringId)
    stringId = stringId + 5
    stringId = stringId.toString()
    return stringId
}

locationOfLetter = 0

function main () {
    let wordInput = box1 + box2 + box3 + box4 + box5;
    if (chosenWord === wordInput) {
        document.getElementById(id0).style.background = "green";
        document.getElementById(id1).style.background = "green";
        document.getElementById(id2).style.background = "green";
        document.getElementById(id3).style.background = "green";
        document.getElementById(id4).style.background = "green";
        alert("כל הכבוד!! ניצחת!!")

    }
    flag =true
    if (lastLetter === id4) {
        id0=addFive(id0)
        id1=addFive(id1)
        id2=addFive(id2)
        id3=addFive(id3)
        id4=addFive(id4)
    }
    if (box5 === "") {
        return;
    }
    if (document.getElementById(locationOfLetter).innerText===""){
        return;
    }

    for (j=0;j<5; j++) {
        ifHave = true
        while (ifHave && j < 5) {
            ifHave = ifLocationRight(chosenWord, wordInput, wordInput.charAt(j))
            if (ifHave) {
                document.getElementById(locationOfLetter).style.background = "green";
                letterToDraw = document.getElementById(locationOfLetter).innerText;
                document.getElementById(letterToDraw).style.background = "green";
                locationOfLetter++
                if (j === 4) {
                    ifHave = false
                    return;
                }
                if (j < 4) {
                    j++
                }
            }
        }


        let ifExist2 = isExistLetter(chosenWord,wordInput.charAt(j))
        if (ifExist2) {
            document.getElementById(locationOfLetter).style.background = "yellow";
            letterToDraw = document.getElementById(locationOfLetter).innerText;
            document.getElementById(letterToDraw).style.background = "yellow";

            locationOfLetter++

        }
        else {
            document.getElementById(locationOfLetter).style.background = "grey";
            letterToDraw = document.getElementById(locationOfLetter).innerText;
            document.getElementById(letterToDraw).style.background = "grey";

            ifHave =false
            locationOfLetter++
        }
    }
    if ((locationOfLetter + 5) === "" ){
        return;
    }







}
function toDelete () {
    if (flag===true){
        return
    }

    document.getElementById(lastLetter).innerText = "";
    if (lastLetter !== id0) {
        newNumber =Number(lastLetter)
        newNumber= newNumber-1
        lastLetter = newNumber.toString()
    }


}

    function ifLocationRight (stringRandom , stringEnter,char){
        let ifTrue = false
        let index1 = stringEnter.indexOf(char)
        let index2 = stringRandom.indexOf(char)

        if (index1 === index2){
            ifTrue = true
        }
        return ifTrue
    }

    function isExistLetter (string,char) {
        let ifExist = false
        for (i = 0; i < string.length; i++) {
            if (string.indexOf(char) !== -1) {
                ifExist = true
            }
        }
        return ifExist;
    }





