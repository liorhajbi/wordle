function choseWord(){
    let words = ["איפור","מיטות","סוודר","בקבוק","מברשת","סירים","מחברת","עפרון","מקלדת","טלפון","תמונה","כוסות","חליפה"
        ,"כותנה","שולחן","ספרים","שמיכה","מנורה","מחליק","פרחים"]
    chosenWord =words[(Math.random() *19).toFixed()]
    document.getElementById("chosen word").innerText= chosenWord;
}

function lettersToTextBox(string) {
     box1 = document.getElementById("0").innerText;
     box2 = document.getElementById("1").innerText;
     box3 = document.getElementById("2").innerText;
     box4 = document.getElementById("3").innerText;
     box5 = document.getElementById("4").innerText;
    if (box1 === "") {
        document.getElementById("0").innerText = string;
    } else if (box2 === "") {
        document.getElementById("1").innerText = string;
    } else if (box3 === "") {
        document.getElementById("2").innerText = string;
    } else if (box4 === "") {
        document.getElementById("3").innerText = string;
    } else if (box5 === "") {
        document.getElementById("4").innerText = string;
    }
}

function main () {
    // let userInput1 = document.getElementById("11").innerText;
    // let userInput2 = document.getElementById("12").innerText;
    // let userInput3 = document.getElementById("13").innerText;
    // let userInput4 = document.getElementById("14").innerText;
     let userInput5 = document.getElementById("4").innerText;
    let wordInput = box1 + box2 + box3 + box4 + userInput5
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


