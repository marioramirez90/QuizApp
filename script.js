let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Bill Gates",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Mark Zuckerberg",
        "answer_4": "Steve Jobs",
        "right_answer": 2
    },
    {
        "question": "Wofür steht HTML?",
        "answer_1": "HyperText Markup Language",
        "answer_2": "High Text Machine Language",
        "answer_3": "Hyperlinks Text Mark Language",
        "answer_4": "Home Tool Markup Language",
        "right_answer": 1
    },
    {
        "question": "Welcher HTML-Tag-Name wird für einen Absatz verwendet?",
        "answer_1": "Das div-Tag",
        "answer_2": "Das span-Tag",
        "answer_3": "Das p-Tag",
        "answer_4": "Das h1-Tag",
        "right_answer": 3
    },
    {
        "question": "Welcher Tag ist für die wichtigste Überschrift gedacht?",
        "answer_1": "Das p-Tag",
        "answer_2": "Das h1-Tag",
        "answer_3": "Das br-Tag",
        "answer_4": "Das img-Tag",
        "right_answer": 2
    },
    {
        "question": "Wie heißt der Tag zum Einbinden von JavaScript?",
        "answer_1": "css",
        "answer_2": "style",
        "answer_3": "script",
        "answer_4": "javascript",
        "right_answer": 3
    },
    {
        "question": "Wie beginnt ein einzeiliger Kommentar in JavaScript?",
        "answer_1": "/*",
        "answer_2": "Mit Pfeilen",
        "answer_3": "//",
        "answer_4": "##",
        "right_answer": 3
    },
    {
        "question": "Welcher Befehl schreibt Text in die Browser-Konsole?",
        "answer_1": "console.log()",
        "answer_2": "print()",
        "answer_3": "echo()",
        "answer_4": "write()",
        "right_answer": 1
    },
    {
        "question": "Welches Symbol beendet normalerweise eine JS-Anweisung?",
        "answer_1": "Punkt",
        "answer_2": "Komma",
        "answer_3": "Semikolon (;)",
        "answer_4": "Doppelpunkt",
        "right_answer": 3
    },
    {
        "question": "Mit welchem Wort deklariert man eine moderne Variable?",
        "answer_1": "variable",
        "answer_2": "let",
        "answer_3": "create",
        "answer_4": "set",
        "right_answer": 2
    },
    {
        "question": "Welche Abkürzung wird im Tag für Bilder genutzt?",
        "answer_1": "image",
        "answer_2": "pic",
        "answer_3": "img",
        "answer_4": "src",
        "right_answer": 3
    }
];

let currentQuestion = 0
let righQuestion = 0

function init(){
    document.getElementById("all-questions").innerHTML = questions.length
    
    showQuestion()
   
}

function showQuestion(){

    if(currentQuestion >= questions.length){
        document.getElementById("endscreen").style = ""
        document.getElementById("questionBody").style = "display : none"

        document.getElementById("question-number-final").innerHTML = questions.length;
        document.getElementById("amout-right-questions").innerHTML = righQuestion
        
    }else{

        let percent = (currentQuestion +1 )/ questions.length;
        percent = Math.round(percent * 100);

        document.getElementById("progress-bar").innerHTML = `${percent} %`;
         document.getElementById("progress-bar").style = `width: ${percent}%;`;


        let question = questions[currentQuestion];
   document.getElementById("question-number").innerHTML = currentQuestion + 1;
   document.getElementById("question-text").innerHTML = question["question"];
   document.getElementById("answer_1").innerHTML = question["answer_1"];
   document.getElementById("answer_2").innerHTML = question["answer_2"];
   document.getElementById("answer_3").innerHTML = question["answer_3"];
   document.getElementById("answer_4").innerHTML = question["answer_4"];
    }
}

function answer(selection){
     let question = questions[currentQuestion];
     let selectionQuestionNumber = selection.slice(-1)
     let idOfAnswer = `answer_${question["right_answer"]}`

     if (selectionQuestionNumber == question["right_answer"]) {
       document.getElementById(selection).parentNode.classList.add('bg-success');
       righQuestion++;

     }else{
       document.getElementById(selection).parentNode.classList.add("bg-danger");
       document.getElementById(idOfAnswer).parentNode.classList.add("bg-success");
      
     }
      document.getElementById("next-button").disabled = false;

}

function nextQuestion(){
    currentQuestion++;
    document.getElementById("next-button").disabled = true;
    resteAnswerButton()
    showQuestion();

}

function resteAnswerButton(){
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");

    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");

    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");

    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");

}