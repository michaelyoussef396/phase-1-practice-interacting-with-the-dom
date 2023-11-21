let counterValue = 0;
let timer;

function incrementCounter() {
    timer = setInterval(() => {
        document.getElementById('counter').innerText = counterValue++;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    incrementCounter();
});


document.getElementById('plus').addEventListener('click', () => {
    counterValue++;
    document.getElementById('counter').innerText = counterValue;
});

document.getElementById('minus').addEventListener('click', () => {
    counterValue--;
    document.getElementById('counter').innerText = counterValue;
});


const likes = {};

document.getElementById('heart').addEventListener('click', () => {
    if (!likes[counterValue]) {
        likes[counterValue] = 1;
    } else {
        likes[counterValue]++;
    }

    const likesList = document.querySelector('.likes');
    const likeItem = document.createElement('li');
    likeItem.innerText = `${counterValue} has been liked ${likes[counterValue]} times`;
    likesList.appendChild(likeItem);
});

let isPaused = false;

document.getElementById('pause').addEventListener('click', () => {
    isPaused = !isPaused;
    const buttons = document.querySelectorAll('button:not(#pause)');

    if (isPaused) {
        clearInterval(timer);
        document.getElementById('pause').innerText = 'resume';
        buttons.forEach(button => {
            button.disabled = true;
        });
    } else {
        incrementCounter();
        document.getElementById('pause').innerText = 'pause';
        buttons.forEach(button => {
            button.disabled = false;
        });
    }
});

document.getElementById('restart').addEventListener('click', () => {
    clearInterval(timer);
    counterValue = 0;
    document.getElementById('counter').innerText = counterValue;
    const buttons = document.querySelectorAll('button:not(#pause)');
    buttons.forEach(button => {
        button.disabled = false;
    });
    document.getElementById('pause').innerText = 'pause';
    incrementCounter();
});


document.getElementById('restart').addEventListener('click', () => {
    clearInterval(timer);
    counterValue = 0;
    document.getElementById('counter').innerText = counterValue;
    const buttons = document.querySelectorAll('button:not(#pause)');
    buttons.forEach(button => {
        button.disabled = false;
    });
    document.getElementById('pause').innerText = 'pause';
    incrementCounter();
});


document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input').value;
    const commentList = document.getElementById('list');
    const commentItem = document.createElement('div');
    commentItem.innerText = commentInput;
    commentList.appendChild(commentItem);
});
