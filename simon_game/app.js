let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);                                // 0.25 sec
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);                                // 0.25 sec
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerHTML = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn); 
}


function checkAns(idx){
    // console.log(`Curr level : ${level}`);
    // let idx = level-1;

    if(userSeq[idx] == gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            // levelUp();
            setTimeout(levelUp(), 1000);
        }
    }else{
        h3.innerHTML = `Game over! your score was <b>${level}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        })
        reset();
    }
}
function btnPress(){   
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}