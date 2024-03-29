const audio4 = new Audio("cute-level-up-3-189853.mp3");
const tl = gsap.timeline();
function loadingtime(){
  var a = 0
  setInterval(function(){
   a = a + Math.floor(Math.random()*15) 
    if(a<100){
  document.querySelector("#loader h1").innerHTML = a+"%"
  }
  else{
    a=100
    document.querySelector("#loader h1").innerHTML = a+"%"
  }
  },100)
  
}

tl.to("#loader h2",{
scale:1.2,
stagger:3,
delay:2,
onStart:loadingtime(),
onComplete:function(){
audio4.play();
}
})

tl.to("#loader",{
  display:"none",
  duration:1.5,

})
var time = 60;
var score = 0;
var hitrn=0;
var right_hit=0;
var wrong_hit=0;
const audio1= new Audio("multi-pop-1-188165.mp3");
const audio2= new Audio("Z7E8E5U-beep-beep.mp3");
const audio3= new Audio("analog-appliance-button-15-186961.mp3");

function righthit(){
  right_hit +=1;
  document.querySelector("#rh").innerHTML = right_hit;
}
function wronghit(){
  wrong_hit +=1;
  document.querySelector("#wh").innerHTML = wrong_hit;
}

function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
function decreasescore(){
  score -= 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
   hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitval").innerHTML = hitrn;
}

function makebubble(){
var bubbles="";
for(var i =1;i<=176;i++)
  {
    var rn = Math.floor(Math.random()*10);
  bubbles +=`<div class="bubble">${rn}</div>`
  }
document.querySelector(".pbottom").innerHTML = bubbles;
}


function runtimer(){
 var t= setInterval(function(){
    if(time>0)
    {
    time--; 
    document.querySelector("#timer").textContent = time;
    }
    else{
    clearInterval(t); 
    document.querySelector(".pbottom").innerHTML = `<h1>Game 
    Over</h1>`;
    }
  },1000)
}

document.querySelector(".pbottom").addEventListener("click", function(dets){
var clickednum = Number(dets.target.textContent)
  if(clickednum === hitrn)
  {
    audio1.play();
    increaseScore();
    makebubble();
    getNewHit();
    righthit();
  }
  else{
    audio2.play()
    decreasescore();
     wronghit();
  }
})
document.querySelector("button").addEventListener("click",
function(){
audio3.play();
runtimer();
makebubble();
getNewHit();
  })
document.querySelector(".res").addEventListener("click",
function(){
audio3.play();
window.location.reload();  
})
