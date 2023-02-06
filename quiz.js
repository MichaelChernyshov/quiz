let arrayOfQuestions = ["Tomatoes are fruits, not vegetables: true or false", 
"You should drink 8 glasses of water: true or false",
"Fishes have only three seconds of memory: true or false",
"The Great Wall of China is the only man made structure visible from space The Great Wall of China: true or false"
];

let points = 0;


function quiz() {
    
    if (prompt(arrayOfQuestions[0]) === "True" ) {
        points += 10
        alert("Correct")
    } else {
        points -= 5
        alert("Incorrect")
    }

    if (prompt(arrayOfQuestions[1]) === "False" ) {
        points += 10
        alert("Correct")
    } else {
        points -= 5
        alert("Incorrect")
    }

    if (prompt(arrayOfQuestions[2]) === "False" ) {
        points += 10
        alert("Correct")
    } else {
        points -= 5
        alert("Incorrect")
    }

    if (prompt(arrayOfQuestions[3]) === "True" ) {
        points += 10
        alert("Correct")
    } else {
        points -= 5
        alert("Incorrect")
    }
};

quiz();
alert(`You have ${points}`);