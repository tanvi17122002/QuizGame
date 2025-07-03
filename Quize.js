let questionBox=[{
    id:"qa-1",
    question:"Which is stable verion of js?",
    options:["ES6","ES8","ES9","ES5"],
    correctAnswer:"ES6",
},
{
    id:"qa-2",
    question:"White light is the combination of how many colours?",
    options:[8,5,7,9],
    correctAnswer:7,
},
{
     id:"qa-3",
    question:"What is full form of DOM?",
    options:["Document Data Model","Document Object mode","Document oriented model","Document Object Model"],
    correctAnswer:"Document Object Model",
},
{
    id:"qa-4",
    question:"Who developed JS?",
    options:["Games Goosling","Brendon Eich","Tims Bernly","Bertboss"],
    correctAnswer:"Brendon Eich",
},
{
    id:"qa-5",
    question:"Which keyword is used to declare a variable in JavaScript?",
    options:["var","let","const","All of these"],
    correctAnswer:"All of these",
}

]

let questionElement=document.getElementById("question")
let optionElement=document.getElementById("option")
let scoreElement=document.getElementById("score");

let score=0;
let currentQuestion=0;

function showQuestion()
{
    let{question,options,correctAnswer}=questionBox[currentQuestion]
    questionElement.textContent=question;

    console.log(options)
    options.map((opt)=>{
        let btn=document.createElement("button")
        btn.setAttribute("id","btn");
        btn.textContent=opt;
        optionElement.appendChild(btn);
        scoreElement.textContent=`score:${score}/${questionBox.length}`;
        btn.addEventListener("click",()=>{

            if(opt==correctAnswer){
                btn.style.backgroundColor="green";
                score+=1;
            }else{
                btn.style.backgroundColor="red";
                score-=0.25;
            }
            // console.log(score)
             setTimeout(()=>{
                nextQuestion();
             },2000)
        })

    });
}
showQuestion();

function nextQuestion()
{
    currentQuestion++;
    optionElement.textContent=" ";
    if(currentQuestion==questionBox.length){

        questionElement.textContent="Quiz Completed"
        scoreElement.textContent=`score:${score}/${questionBox.length}`;
    }else{
        showQuestion();
    }
}