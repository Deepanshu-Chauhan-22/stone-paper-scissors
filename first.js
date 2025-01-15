let userScore=0;
let compScore=0;
let uchoice,cchoice,uwin;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");

const showWinner=(uwin)=>{
    
    if(uwin){
        userScore++;
        uscore.innerText=userScore;
        console.log("you win");
        msg.innerText="You win";
        msg.style.backgoundColor="green";
    }else{
        compScore++;
        cscore.innerText=compScore;
        console.log("you lose");
        msg.innerText="You lose";
        msg.style.backgoundColor="red";
    }
}

const compchoice=()=>{
    let options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3); 
    return options[idx];
};

const playgame=(uchoice)=>{
    console.log("user choice-",uchoice);
    const cchoice=compchoice();
    console.log(`computer choice-${cchoice}`);

    if(uchoice===cchoice){
        console.log("game draw");
        msg.innerText="Draw";
       
    }
    else{
        let uwin=true;
        if(uchoice=="rock"){
            uwin=cchoice==="paper"?false:true;
        }else if(uchoice==="paper"){
            uwin=cchoice==="scissors"?false:true;
        }else {
            uwin=cchoice==="rock"?false:true;
        }
        showWinner(uwin);
    }
    
    

}

choices.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{
        const uchoice=choice.getAttribute("id");
        
        playgame(uchoice);
    })
})

