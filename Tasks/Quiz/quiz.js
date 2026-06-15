let DataBase = [
    {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript",
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: ["var", "let", "const", "make"],
        answer: "const",
    },
    {
        question: "Which data structure operates on a First-In, First-Out (FIFO) basis?",
        options: ["Stack", "Queue", "Array", "Object"],
        answer: "Queue",
    },
    {
        question: "What is the correct way to write an array in JavaScript?",
        options: ["let colors = 'red', 'green'", "let colors = ['red', 'green']", "let colors = (1:'red', 2:'green')", "let colors = {red, green}"],
        answer: "let colors = ['red', 'green']",
    },
    {
        question: "Which operator is used for strict equality comparison in JS (checks both value and type)?",
        options: ["=", "==", "===", "!="],
        answer: "===",
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets",
    },
    {
        question: "Which function is used to print something in the browser console?",
        options: ["console.print()", "console.log()", "print()", "log.console()"],
        answer: "console.log()",
    },
    {
        question: "In Python, which function is used to add an item to the end of a list?",
        options: ["add()", "push()", "insert()", "append()"],
        answer: "append()",
    },
    {
        question: "What does JS stand for? ",
        options: ["Java", "Python", "JavaScript", "TypeScript"],
        answer: "JavaScript",
    },
]


let currentIndex = 0


function Question_Taker() {
    console.log("In Question_Taker");

    if (currentIndex >= DataBase.length) {
    document.getElementById("Question").innerHTML = "Quiz Finished! 🎉";

    document.getElementById("last_finish").innerHTML = ""
    return;
    }
    else{

    document.getElementById("Question").innerHTML = DataBase[currentIndex].question

    document.getElementById("option1_label").innerHTML = DataBase[currentIndex].options[0]
    document.getElementById("option2_label").innerHTML = DataBase[currentIndex].options[1]
    document.getElementById("option3_label").innerHTML = DataBase[currentIndex].options[2]
    document.getElementById("option4_label").innerHTML = DataBase[currentIndex].options[3]
    console.log(currentIndex);
    

    DataBase.forEach( (Data, index) => {
        if (index < 4) {
            console.log(DataBase[currentIndex].options[index]);
        }
    })
    }
}

Question_Taker()

function answers(event) {

    event.preventDefault()

    console.log("Send Answer");

    let Option1_radio = document.getElementById("option1")
    console.log(Option1_radio.checked);
    let Option2_radio = document.getElementById("option2")
    console.log(Option2_radio.checked);
    let Option3_radio = document.getElementById("option3")
    console.log(Option3_radio.checked);
    let Option4_radio = document.getElementById("option4")
    console.log(Option4_radio.checked);

    const Option1_label = document.getElementById("option1_label").innerHTML
    const Option2_label = document.getElementById("option2_label").innerHTML
    const Option3_label = document.getElementById("option3_label").innerHTML
    const Option4_label = document.getElementById("option4_label").innerHTML

    if (Option1_radio.checked === true) {
        if (Option1_label === DataBase[currentIndex].answer) {
            document.getElementById("correct_or_not").style.color = "green"
            document.getElementById("correct_or_not").innerHTML = "Your last answer is correct !"
            currentIndex++
            Question_Taker()
        }
        else{
            document.getElementById("correct_or_not").style.color = "red"
            document.getElementById("correct_or_not").innerHTML = "Wrong Answer !"
        }
    }else if (Option2_radio.checked === true) {
        if (Option2_label === DataBase[currentIndex].answer) {
            document.getElementById("correct_or_not").style.color = "green"
            document.getElementById("correct_or_not").innerHTML = "Your last answer is correct !"
            currentIndex++
            Question_Taker()
        }
        else{
            document.getElementById("correct_or_not").style.color = "red"
            document.getElementById("correct_or_not").innerHTML = "Wrong Answer !"
        }
    }else if (Option3_radio.checked === true) {
        if (Option3_label === DataBase[currentIndex].answer) {
            document.getElementById("correct_or_not").style.color = "green"
            document.getElementById("correct_or_not").innerHTML = "Your last answer is correct !"
            currentIndex++
            Question_Taker()
        }
        else{
            document.getElementById("correct_or_not").style.color = "red"
            document.getElementById("correct_or_not").innerHTML = "Wrong Answer !"
        }
    }else if (Option4_radio.checked === true) {
        if (Option4_label === DataBase[currentIndex].answer) {
            document.getElementById("correct_or_not").style.color = "green"
            document.getElementById("correct_or_not").innerHTML = "Your last answer is Correct !"
            currentIndex++
            Question_Taker()
        }
        else{
            document.getElementById("correct_or_not").style.color = "red"
            document.getElementById("correct_or_not").innerHTML = "Wrong Answer !"
        }
    }    

    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;
    document.getElementById("option4").checked = false;
    
    
}