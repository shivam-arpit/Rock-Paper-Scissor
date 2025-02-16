let con= document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let boom=document.querySelector(".boom");
let winmodal=document.querySelector(".win-modal");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let score=JSON.parse(localStorage.getItem("userscore"))||0;
let scoreElem=document.getElementById("score");
let comscore=JSON.parse(localStorage.getItem("comscore"))||0;
let comscoreElem=document.getElementById("scor");
let btnrule=document.querySelector(".btn-rule");
let rulemodal=document.querySelector(".rule-modal");
let ruleimg=document.querySelector(".rule-img");
let btnnext=document.getElementById("next-round");
let btnreset=document.getElementById("reset-score");
scoreElem.innerText=score;
comscoreElem.innerText=comscore;
con.forEach((element,index)=>{
  element.addEventListener("click",()=>{
   user.style.opacity=1
    triangle.style.display="none";
    con.forEach(item=>{
    item.style.display="none";
    });
    element.style.display="block";
    element.classList.add("show");
    setTimeout(()=>{
   machine.style.opacity="1";
   setTimeout(()=>{
    computer[random].style.display="block";
   computer[random].classList.add("right");
   },1000);
    },500);
    setTimeout(()=>{
      let userChoice=con[index];
      let computerChoice=computer[random];
    document.querySelectorAll(".winner-circle").forEach(el=>el.classList.remove("winner-circle"));
      if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
       winmodal.style.display="grid";
       winner.innerText="YOU WIN \n AGAINST PC";
       btnnext.style.display="block";
       userChoice.classList.add("winner-circle");
       score++;
       scoreElem.innerText=score;
        localStorage.setItem("userscore",JSON.stringify(score));
      
      }else if(index==0 && random==1|| index==1 && random==2 || index==2 && random==0){
        winmodal.style.display="grid";
        winner.innerText="YOU lOST \n AGAINST PC";
        btnnext.style.display="none";
        computerChoice.classList.add("winner-circle");
        comscore++;
        comscoreElem.innerHTML=comscore;
        localStorage.setItem("comscore",JSON.stringify(comscore));
      }
      else{
        winmodal.style.display="grid";
        winner.innerText="TIE UP";
        btnnext.style.display="none";
        play.innerText="REPLAY";
      }
     },1500);
  });
});
btnnext.addEventListener("click",()=>{
 window.location.reload();
});
play.addEventListener("click",()=>{
  window.location.reload();
});


/*btnreset.addEventListener("click", () => {
  localStorage.setItem("userscore", JSON.stringify(0));
  localStorage.setItem("comscore", JSON.stringify(0));
  scoreElem.innerText = 0;
  comscoreElem.innerText = 0;
});*/

btnrule.addEventListener("click",()=>{
  rulemodal.style.display="flex";
  setTimeout(()=>{
    ruleimg.style.transform="translateY(0)";

  },200);

})
let close=document.querySelector(".close");
close.addEventListener("click",()=>{
  ruleimg.style.transform="translateY(-200)";
  setTimeout(()=>{
    rulemodal.style.display="none";
  }, 400);

  });