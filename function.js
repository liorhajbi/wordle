function choseWord(){
    let words = ["איפור","מיטות","סוודר","בקבוק","מברשת","סירים","מחברת","עפרון","מקלדת","טלפון","תמונה","כוסות","חליפה"
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


function main () {


    if (lastLetter === id4) {
        id0=addFive(id0)
        id1=addFive(id1)
        id2=addFive(id2)
        id3=addFive(id3)
        id4=addFive(id4)
    }
    if (box5 === "") {
        alert("return")
        return;
    }

    let wordInput = box1 + box2 + box3 + box4 + box5;
    alert(wordInput)
    if (chosenWord === wordInput) {
        alert("very good")
        return;
        //ניצחון , הכל ירוק
    }
    for (j=0;j<5; j++){
        ifHave=true
        while (ifHave && j<5){
            ifHave =ifLocationRight(chosenWord,wordInput,wordInput.charAt(j))
            if (ifHave){
                alert(wordInput.charAt(j) + " " + "קיים במקום")
                if (j===4){
                    ifHave =false
                    return;
                }
                if (j < 4) {
                    j++
                }
            }

            else {
                ifHave =false
            }

        }
        let ifExist2 = isExistLetter(chosenWord,wordInput.charAt(j))
        if (ifExist2) {
            alert(wordInput.charAt(j) + "  " + "קיים לא במקום")
        }
    }



}
function toDelete () {
    document.getElementById(lastLetter).innerText = "";
    newNumber =Number(lastLetter)
    newNumber= newNumber-1
    lastLetter = newNumber.toString()

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





