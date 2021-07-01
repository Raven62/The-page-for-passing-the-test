const DATA = [
   {
   
    question: 'Сколько будет 2+2',
    answers:  [
    {
    id:'0',
    value: 'Четыре',
    correct: true,
    },
    {
    id:'1',
    value: 'Пять',
    correct: false,
    },
    {
    id:'2',
    value: 'Два',
    correct: false,
    },
    {
    id:'3',
    value: 'Восемь',
    correct: false,
    },
              ]
    
   },
   {
   
    question: 'Сколько глаз у здорового человека',
    answers:  [
    {
    id:'4',
    value: 'Три',
    correct: false,
    },
    {
    id:'5',
    value: 'Четыре',
    correct: false,
    },
    {
    id:'6',
    value: 'Два',
    correct: true,
    },
   
              ]
    
   },
             ];
var b = false;
let questone = '';
let questtwo = '';
let localResults = {};

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const btnSend = document.getElementById('btn-send');
    


const renderQuestions = (index) => {
    renderIndicator(index + 1);
    
    question.dataset.currentStep = index;
   const renderAnswers = () => DATA[index].answers.map((answer) => `
                
                <li>
                    <label>
                        <input class="answer-input"  type="radio" name=${index} value= ${answer.id}>
                        ${answer.value}
                    </label>
                    
                </li>

` )
     .join('');
    
    question.innerHTML =   `
<div class="quiz-question-item">
            <div class="quiz-question-item-quastions">${DATA[index].question}</div>
            <ul class="quiz-question-item-answers">${renderAnswers()}</ul>
        </div>`;
                                 };

const renderResults = () => {
    
    let content ='';
    
   
   
    
    for(let i = 0; i < 2 ; i++){

        
        if(Number(localResults[i]) === 0){
           
           questone = 'Четыре';
           }
        if(Number(localResults[i]) === 1){
           
           questone ='Пять' ;
           }
        if(Number(localResults[i]) === 2){
           
           questone ='Два' ;
           }
        if(Number(localResults[i]) === 3){
           
           questone = 'Восемь';
           }
        if(Number(localResults[i]) === 4){
           
           questtwo = 'Три' ;
           }
        if(Number(localResults[i]) === 5){
           
          questtwo = 'Четыре' ;
           }
        if(Number(localResults[i]) === 6){
           
          questtwo = 'Два' ;
           } 
   
    }
    
     
        
    
    content += `
          <form action="PHP/send.php" method="post">
<div class="interface">
            <label class="lb" >Ответ на 1 вопрос
             <input type = "text" name="qone" class="inp" value =${questone} ></label>
        </div>
<div class="interface">
<label class="lb" >Ответ на 2 вопрос
             <input type = "text" name="qtwo" class="inp" value =${questtwo} ></label>
        </div>
           <div class="interface">
            <label class="lb" >Введите ваше имя
             <input type = "text" name="name" class="inp"  placeholder="Например, Никита" required></label>
        </div>
        <div class="interface">
            <label class="lb" >Введите вашу фамилию
            <input type = "text" name="surname" class="inp"  placeholder="Например, Иванов" required></label>
            
        </div>
        <div class="interface">
            <label class="lb" >Введите номер телефона
            <input type = "text" name="phone" class="inp"  placeholder="+7(999)99 99 999" required></label>
            
        </div>
        <div class="interface">
            <button class="btn-send" id="btn-send">Отправить</button>
            
        </div>
        </form>  
        `;
    
    
    results.innerHTML = content;
    
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};
      

quiz.addEventListener('change', (event) =>  {
    if(event.target.classList.contains('answer-input')){
         
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }

    });   
       

    
    quiz.addEventListener('click', (event) =>  {
           
    if(event.target.classList.contains('btn-back')){
         
        
        btnNext.disabled = true;
        
       
       if(Number(question.dataset.currentStep) + 1 === DATA.length && b === true ){
          
           question.classList.remove('questions-hidden');
            indicator.classList.remove('indicator-hidden');
            results.classList.remove('indicator-visible');
            btnNext.classList.remove('btn-next-hidden'); 
           btnBack.disabled = false;
           localResults = {};
            b = false;
       }
        else{
          renderQuestions(Number(question.dataset.currentStep) - 1);
            btnBack.disabled = true;
            }
        
       }
      
      if(event.target.classList.contains('btn-next')){
      const nextQuestionIndex = Number(question.dataset.currentStep) + 1;
        
        btnNext.disabled = true;
        btnBack.disabled = false;
        if (DATA.length === nextQuestionIndex) 
        {
              b = true;
            question.classList.add('questions-hidden');
            indicator.classList.add('indicator-hidden');
            results.classList.add('indicator-visible');
            btnNext.classList.add('btn-next-hidden'); 
            
            renderResults();
          
        }
        else {
            renderQuestions(nextQuestionIndex);
        }
    
    }
});   

renderQuestions(0);
    
