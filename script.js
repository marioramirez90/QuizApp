let questions = [
    {
        "question": "wer hat HTML erfunden ?",
        "answer_1": "bill gates",
        "answer_2": "tim berners-lee",
        "answer_3": "mark zuckerberg",
        "answer_4": "steve jobs",
        "right_answer": 2
    },
    {
        "question": "wofür steht HTML ?",
        "answer_1": "Hyper Text Markup Language",
        "answer_2": "High Text Machine Language",
        "answer_3": "Hyperlinks Text Mark Language",
        "answer_4": "Home Tool Markup Language",
        "right_answer": 1
    },
    {
        "question": "welches tag macht einen absatz ?",
        "answer_1": "<div>",
        "answer_2": "<span>",
        "answer_3": "<p>",
        "answer_4": "<h1>",
        "right_answer": 3
    },
    {
        "question": "welches tag ist für überschriften ?",
        "answer_1": "<p>",
        "answer_2": "<h1>",
        "answer_3": "<br>",
        "answer_4": "<img>",
        "right_answer": 2
    },
    {
        "question": "wo kommt JavaScript im HTML rein ?",
        "answer_1": "<css>",
        "answer_2": "<style>",
        "answer_3": "<script>",
        "answer_4": "<js>",
        "right_answer": 3
    },
    {
        "question": "wie schreibt man einen kommentar in JavaScript ?",
        "answer_1": "/* kommentar */",
        "answer_2": "<!-- kommentar -->",
        "answer_3": "// kommentar",
        "answer_4": "** kommentar **",
        "right_answer": 3
    },
    {
        "question": "wie zeigt man text in JavaScript an ?",
        "answer_1": "console.log()",
        "answer_2": "print()",
        "answer_3": "echo()",
        "answer_4": "write()",
        "right_answer": 1
    },
    {
        "question": "welches zeichen beendet einen JavaScript befehl ?",
        "answer_1": ".",
        "answer_2": ",",
        "answer_3": ";",
        "answer_4": ":",
        "right_answer": 3
    },
    {
        "question": "wie heißt eine variable in JavaScript ?",
        "answer_1": "number",
        "answer_2": "let",
        "answer_3": "text",
        "answer_4": "value",
        "right_answer": 2
    },
    {
        "question": "welches html tag zeigt ein bild ?",
        "answer_1": "<image>",
        "answer_2": "<pic>",
        "answer_3": "<img>",
        "answer_4": "<src>",
        "right_answer": 3
    }
];

let currentQuestion = 0

function init(){
    document.getElementById("all-questions").innerHTML = questions.length
    showQuestion()
   
}

function showQuestion(){
    let question = questions[currentQuestion];
   document.getElementById("question-text").innerHTML = question["question"];
   document.getElementById("answer_1").innerHTML = question["answer_1"];
   document.getElementById("answer_2").innerHTML = question["answer_2"];
   document.getElementById("answer_3").innerHTML = question["answer_3"];
   document.getElementById("answer_4").innerHTML = question["answer_4"];
}
function answer(selection){
     let question = questions[currentQuestion];
     let selectionQuestionNumber = selection.slice(-1)
     if (selectionQuestionNumber == question["right_answer"]) {
       document.getElementById(selection).style.backgroundColor = "green";
     }else{
         document.getElementById(selection).style.backgroundColor = "red";
     }



}