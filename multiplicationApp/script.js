const num1=Math.floor(Math.random()*10)+1;
const num2=Math.floor(Math.random()*10)+1;

const questionEl=document.getElementById("question");

const inputEl=document.getElementById("input")

const formEl=document.getElementById("form")

const scoreEl=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));

if(!score)
{
    score=0;
}
questionEl.innerText=`What is ${num1} multiply by ${num2}?`;

const correctans=num1*num2;

formEl.addEventListener("submit",()=>{
   const userAns=+inputEl.value;

   if(userAns===correctans)
   {
     score++;
     updatelocalStorage();
   }
   else{
    score--;
    updatelocalStorage(); 
   }
})

function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

scoreEl.innerText=`score: ${score}`