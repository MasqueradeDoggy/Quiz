const QNA = [
    ["What is Considered the 'lucky number'?", "7"],
    ["Who is the biggest character in the Disney Entertainment franchise?", "Mickey Mouse"],
    ["Who is Batman?", "Bruce Wayne"],
    ["What is Superman's weakness?", "Kryptonite"],
    ["Did Kirito take the MC Masterclass?", "Yes"]
];
const questionText = document.querySelector(".qtext")

function pickArray(){
    const randomArray = Math.floor(Math.random()*QNA.length);
    return QNA[randomArray];
}

function getInstance(){
    const instance = pickArray();
    
    return instance;
}

const Question = getInstance();
const Answer = Question[1].toString();
const input = document.getElementById('answer');
const form = document.getElementById('checker');

function startGame(){
    

    console.log(Question)
    questionText.textContent = Question[0];
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inptv = input.value.trim()
        if (inptv === Answer) {
                alert('correct')
            } else {
                alert('incorrect')
                console.log(Answer)

                console.log('Input Value:', inptv);
                console.log('Answer:', Answer.toString().toLowerCase());

            }
    });
}
startGame()