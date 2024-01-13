const questionText = document.querySelector(".qtext")
const QNA = [
    ["What is Considered the 'lucky number'?", "7"],
    ["Who is the biggest character in the Disney Entertainment franchise?", "Mickey Mouse"],
    ["Who is Batman?", "Bruce Wayne"],
    ["What is Superman's weakness?", "Kryptonite"],
    ["Did Kirito take the MC Masterclass?", "Yes"]
];

function pickArray(){
    const randomArray = Math.floor(Math.random()*QNA.length);
    return QNA[randomArray];
}

function getInstance(){
    return pickArray();
}

let points = 0;

function startGame(){
    let Question = getInstance();
    let Answer = Question[1].toString();
    const input = document.getElementById('answer');
    const form = document.getElementById('checker');
    const score = document.getElementById('score');     

    console.log(Question);
    questionText.textContent = Question[0];
    
    score.textContent = `Score: ${points}`

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inptv = input.value.trim()
        if (inptv === Answer) {
                alert('correct')

                points++
                score.textContent = `Score: ${points}`
                console.log(points)

                Question = getInstance();
                Answer = Question[1].toString();
                questionText.textContent = Question[0]
            } else {
                alert('incorrect')
                console.log(Answer)

                console.log('Input Value:', inptv);
                console.log('Answer:', Answer.toString().toLowerCase());
            }
        if (points === 5){
            location.reload()
        }
    });
}
startGame()