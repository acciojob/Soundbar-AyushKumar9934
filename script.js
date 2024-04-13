//your JS code here. If required.
let play1=document.getElementById("hg rsp1");
let play2=document.getElementById("hg rsp2");
let play3=document.getElementById("hg rsp3");
let play4=document.getElementById("hg rsp4");
let play5=document.getElementById("hg rsp5");
let play6=document.getElementById("hg rsp6");
let stop1=document.getElementById("stop");
let audio1=new Audio("./sound/2006-02-14_Japa Talk_Overcoming being indifferent to the Holy Name_HG RSP.mp3");
let audio2=new Audio("./sound/2006-02-14_Japa Talk_Overcoming being indifferent to the Holy Name_HG RSP.mp3");
let audio3=new Audio("./sound/2006-02-14_Japa Talk_Overcoming being indifferent to the Holy Name_HG RSP.mp3");
let audio4=new Audio("./sound/2006-02-14_Japa Talk_Overcoming being indifferent to the Holy Name_HG RSP.mp3");
let audio5=new Audio("./sound/2006-02-14_Japa Talk_Overcoming being indifferent to the Holy Name_HG RSP.mp3");
let audio6=new Audio("./sound/2006-02-14_Japa Talk_Overcoming being indifferent to the Holy Name_HG RSP.mp3");

function a(){
    pause();
    audio1.play();
}
function b(){
    pause();
    audio2.play();
}

function c(){
    pause();
    audio2.play();
}

function d(){
    pause();
    audio2.play();
}


function e(){
    pause();
    audio2.play();
}

function f(){
    pause();
    audio2.play();
}

function pause(){
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    
}

play1.addEventListener("click",a);
play2.addEventListener("click",b);
play3.addEventListener("click",c);
play4.addEventListener("click",d);
play5.addEventListener("click",e);
play6.addEventListener("click",f);

stop1.addEventListener("click",pause);