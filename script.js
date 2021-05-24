// create fibonacci number
s = [];
function fibonacci(n) {

    if  (n === 1) {
        s.splice(0,0,1);
        let answer = document.createElement('p');
        let container = document.querySelector(".hero");
        let answerText = document.createTextNode(s[n-1]);
        answer.style.fontSize = "30px"
        answer.appendChild(answerText);
        container.appendChild(answer);
    } else if (n == 2) {
        s = [1,1];
        let answer = document.createElement('p');
        let container = document.querySelector(".hero");
        let answerText = document.createTextNode(s[n-1]);
        answer.style.fontSize = "30px"
        answer.appendChild(answerText);
        container.appendChild(answer);
    } else {
        s = [1,1];
        for (i=0; i < n-2; i++) {
        s.push(s[s.length - 1] + s[s.length - 2]);
        }
        let answer = document.createElement('p');
        let container = document.querySelector(".hero");
        let answerText = document.createTextNode(s[n-1]);
        answer.style.fontSize = "30px"
        answer.appendChild(answerText);
        container.appendChild(answer);
    }
    
}
fibonacci(5);

