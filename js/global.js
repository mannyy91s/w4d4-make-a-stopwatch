var counter = 0
var watchInput = document.getElementById('watch-input')
var startButton = document.getElementById('start-button')
var pauseButton = document.getElementById('pause-button')
var stopButton = document.getElementById('stop-button')
var body = document.querySelector('body')
 startButton.addEventListener('click', startTimer)
 pauseButton.addEventListener('click', pauseTimer)
 stopButton.addEventListener('click', reset)

// made two variables to use later on
var beginTimer
var beginReset

//made an timer function that uses the counter value 0 and adds +1 and adds the value into the input box
function timer(){
    counter++
    console.log(counter)
    watchInput.innerHTML = counter
    changeColor()
}


//made an startTimer function will utilize the timer function to begin the countdown

function startTimer(){
    clearTimeout(beginReset)
    clearInterval(beginTimer)
    beginTimer = setInterval(timer, 500) //gave the variable a setinvterval value which will repeat the interval function every 100 miliseconds
}
function pauseTimer(){
    clearInterval(beginTimer)
    beginReset = setTimeout(reset, 4000)
}

//made an reset function that will be used by pause and stop button
function reset(){
    clearInterval(beginTimer)
    counter = 0
    watchInput.innerHTML = counter
}

function changeColor(){
    if(counter == 5){
        body.style.background = 'green'
    }
    else if(counter == 10){
        body.style.background = 'black'
    }
    else if(counter == 15){
        body.style.background = '#CF484C'
    }
    else if(counter == 20){
        body.style.background = '#42A5F8'
    }
    else if(counter == 25){
        body.style.background = '#712357'
    }
    else if(counter == 30){
        body.style.background = '#482A2A'
    }
    else if(counter == 35){
        body.style.background = 'seagreen'
    }
    else if(counter == 40){
        body.style.background = '#F2774B'
    }
}
