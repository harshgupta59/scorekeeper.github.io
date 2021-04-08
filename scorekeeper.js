var p1=document.querySelector("#one");
var p2=document.querySelector("#two");
var p1display=document.querySelector("#p1disp");
var p2display=document.querySelector("#p2disp");
var p1score=0;
var p2score=0;
var gameover=false;
var numlimit=document.querySelector("input");
var winningscoredisplay=document.querySelector("#lim");
var winningscore=5;
var resetgame=document.getElementById("reset");

p1.addEventListener("click",function(){
    if(!gameover){
        p1score++;
        if(p1score===winningscore){
            gameover=true;
            p1display.classList.add("winner");
        }
    }
    p1display.innerHTML=p1score;
});
p2.addEventListener("click",function(){
    if(!gameover){
        p2score++;
        if(p2score===winningscore){
            p2display.classList.add("winner");
            gameover=true;
        }
    }
    p2display.innerHTML=p2score;
});
resetgame.addEventListener("click",function(){
    reset();
});
function reset(){
   
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover=false;
    p1score=0;
    p2score=0;
    p1display.innerHTML=0;
    p2display.innerHTML=0;
}
numlimit.addEventListener("change",function(){
     winningscoredisplay.textContent=numlimit.value;
     winningscore=Number(numlimit.value);
     reset();
});