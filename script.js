var rtn = 0;
var value =0;
var hitt=0;
function maketimer(){ //function
var clustter="";
for( let i=0; i<=183; i++){
    rtn =Math.floor(Math.random()*100 );
     clustter +=`<div class="bubble">${rtn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clustter;}
 var timer=100; // function
function runtimer(){
  var store =setInterval(function(){
    if(timer>0){
timer--;
document.querySelector("#runtimer").textContent=timer;
    }
    else{
        clearInterval(store);
        document.querySelector("#pbtm").innerHTML=` Game Over ⌛`;
    }
},1000);
 } //function
 
 function hit(){
     hitt=Math.floor(Math.random()*100);
    document.querySelector("#hit").textContent = hitt;
 }
// function
 function increaseScore(){
    value += 5;
    document.querySelector("#score").textContent = value;
 }
 

document.querySelector("#pbtm").addEventListener("click", 
function(info){
    var click = Number(info.target.textContent);
   console.log(click);
   if (click === hitt){
      increaseScore();
      maketimer();
      hit();
    }
    
 });
 
runtimer();
maketimer();
hit();


    
 

