p1n = localStorage.getItem('player1name');
p2n = localStorage.getItem('player2name');

question_trn = 'player1'
answer_trn = 'player2'

p1score = 0;
p2score = 0;

document.getElementById('player1_name').innerHTML = p1n + " :";
document.getElementById('player2_name').innerHTML = p2n + " :";
document.getElementById('player1_score').innerHTML = p1score;
document.getElementById('player2_score').innerHTML = p2score;

document.getElementById("player_question").innerHTML = "Question Turn - " + p1n;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2n;

function send() {
    num1 = document.getElementById('number1').value
    num2 = document.getElementById('number2').value
    actual_answer = parseInt(num1) * parseInt(num2)
    console.log(actual_answer)

    question_num = '<h4>' + num1 + ' X ' + num2 + '</h4>'
    input_box = '<br>Answer: <input type="text" id="input_check_box">';
    check_btn = '<br><br><button class="btn btn-info" onclick="check()">Check</button>'
    row = question_num + input_box + check_btn;

    document.getElementById('output').innerHTML = row;
    document.getElementById('number1').value = ''
    document.getElementById('number2').value = ''
}

function check() {
    get_answer = document.getElementById('input_check_box').value
    if(get_answer == actual_answer) {
        if (answer_trn == 'player1')
        {
            p1score = p1score +1
            document.getElementById('player1_score').innerHTML = p1score
        } else {
            p2score = p2score +1
            document.getElementById('player2_score').innerHTML = p2score
        }
    }
    
    if(question_trn == 'player1')
    {
        question_trn = 'player2'
        document.getElementById('player_question').innerHTML = "Question - " + p2n

    } else {
        question_trn = 'player1'
        document.getElementById('player_question').innerHTML = "Question - " + p1n
    }

    if(answer_trn == 'player1')
    {
        answer_trn = 'player2'
        document.getElementById('player_answer').innerHTML = "Answer - " + p2n

    } else {
        answer_trn = 'player1'
        document.getElementById('player_answer').innerHTML = "Answer - " + p1n
    }
    document.getElementById('output').innerHTML = '';
}