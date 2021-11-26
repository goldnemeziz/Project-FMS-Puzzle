const noteOrder = ["e","d","c","d","e","e","e","d","d","d","e","g","g","e","d","c","d","e","e","e","e","d","d","e","d","c"];
let noteCount = 0;

function checkIfRightOrder(string) {
    if (string === noteOrder[noteCount]) {
        noteCount++;
        const updateProgress = document.querySelector(".progress");
        updateProgress.textContent = "Progress: " + (noteCount) + "/26";

        const nextNote = document.querySelector(".next_note");
        nextNote.textContent = "Next Note: " + noteOrder[noteCount];


        const thisKey = document.querySelector(".key_" + noteOrder[noteCount - 1]);
        thisKey.style.backgroundColor = "#2e2e2e";
        const nextKey = document.querySelector(".key_" + noteOrder[noteCount]);

        if (nextKey != null) {
            nextKey.style.backgroundColor = "#6b6b6b";
        } else {
            alert("Great Job! You've completed this excercise!");
        }

    } else {
        const thisKey = document.querySelector(".key_" + noteOrder[noteCount + 1]);
        thisKey.style.backgroundColor = "#2e2e2e";
        alert("try again");
        noteCount = 0;

        const updateProgress = document.querySelector(".progress");
        updateProgress.textContent = "Progress: 0/26";

        const nextNote = document.querySelector(".next_note");
        nextNote.textContent = "Next Note: e";
    }
}

document.onkeypress = function(evt) {
   
    let g = new Audio("sounds/g4.mp3");
    let f = new Audio("sounds/f4.mp3");
    let e = new Audio("sounds/e4.mp3");
    let d = new Audio("sounds/d4.mp3");
    let c = new Audio("sounds/c4.mp3");
    let b = new Audio("sounds/b4.mp3");
    let a = new Audio("sounds/a4.mp3");

    switch (evt.key) {
        case "a": 
            a.play();
            checkIfRightOrder("a");
            break;
        case "s":  
            a.play();
            checkIfRightOrder("a");
            break;
        case "d":
            b.play();
            checkIfRightOrder("b");
            break;
        case "f":
            c.play();
            checkIfRightOrder("c");
            break;
        case "g":
            d.play();
            checkIfRightOrder("d");
            break;
        case "h":
            e.play();
            checkIfRightOrder("e");
            break;
        case "j":
            f.play();
            checkIfRightOrder("f");
            break;
        case "k":
            g.play();
            checkIfRightOrder("g");  
            break;
        case "l":
            g.play();
            checkIfRightOrder("h");     
            break;
    }
};

alert("Press the H key to start playing.");