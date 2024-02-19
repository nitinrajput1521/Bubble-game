var time = 60;
var score = 0;
var hitrn=0;
var right_hit=0;
var wrong_hit=0;

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
    increaseScore();
    makebubble();
    getNewHit();
    righthit();
  }
  else{
    decreasescore();
     wronghit();
  }
})
document.querySelector("button").addEventListener("click",
function(){
runtimer();
makebubble();
getNewHit();
  })
document.querySelector(".res").addEventListener("click",
function(){
window.location.reload();  
})
