let score1 = document.querySelector("#score-1");
let score2 = document.querySelector("#score-2");
let count1 = 0;
let count2 = 0;

function clearScore(){
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    count1 = 0;
    count2 = 0;
}


function increaseOne1(){
    count1 += 1;
    score1.textContent = count1;
}


function increaseTwo1(){
    count1 += 2;
    score1.textContent = count1;
}


function increaseThree1(){
    count1 += 3;
    score1.textContent = count1;
}



function increaseOne2(){
    count2 += 1;
    score2.textContent = count2;
}


function increaseTwo2(){
    count2 += 2;
    score2.textContent = count2;
}


function increaseThree2(){
    count2 += 3;
    score2.textContent = count2;
}
