// variables section
var minutes = 0
var seconds = 0
var tenthSecond = 0
var beginTimer
var beginReset
var watchInput = document.getElementById('watch-input')
var startButton = document.getElementById('start-button')
var body = document.querySelector('body')
var red = 0
var green = 0
var blue = 0
var redIncrease = true
var greenIncrease = true
var blueIncrease = true
var animationId

// Event Listeners
 startButton.addEventListener('click', function(){
     if(this.innerHTML === 'Start' || this.innerHTML === 'Continue'){
         this.innerHTML = 'Pause'
         startTimer()
     }
     else{
         pauseTimer()
         this.innerHTML = 'Continue'
     }
 })
startButton.addEventListener('dblclick', reset)


//functions
//made an timer function that uses the counter value 0 and adds +1 and adds the value into the input box
function timer(){
    tenthSecond++
    if(tenthSecond == 100){
        tenthSecond = 0
        seconds++
    }
    else if(seconds == 60){
        seconds = 0
        minutes++
    }
    watchInput.innerHTML = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ':' + tenthSecond
    changeColor()
    colorChanger()
}
//made an startTimer function will utilize the timer function to begin the countdown

function startTimer(){
    clearTimeout(beginReset)
    clearInterval(beginTimer)
    beginTimer = setInterval(timer, 10) //gave the variable a setinvterval value which will repeat the interval function every 100 miliseconds
    watchInput.classList.remove('blinker') // removed the blinker class when start button is pressed
    watchInput.style.color = 'seagreen'
    animationLoop()

}
function pauseTimer(){
    clearTimeout(beginReset)
    clearInterval(beginTimer)
    beginReset = setTimeout(reset, 5000)
    watchInput.classList.add('blinker') //made a blinker class in css that adds the blink property to the h1 tag which is the counter
    watchInput.style.color = 'orange'

}

//made an reset function that will be used by pause and stop button
function reset(){
    clearInterval(beginTimer)
    minutes = 0
    seconds = 0
    tenthSecond = 0
    watchInput.innerHTML = '0'+minutes + ':0' + seconds + ':' + tenthSecond + '0'
    watchInput.classList.remove('blinker') //removing the blinker property when the stop button is pressed
    body.style.background = '#482A2A'
    watchInput.style.color = '#F2774B'
    startButton.innerHTML = 'Start'
}

function changeColor(){
    if(seconds == 5){
        body.style.background = 'green'
    }
    else if(seconds == 10){
        body.style.background = 'darkgreen'
    }
    else if(seconds == 15){
        body.style.background = 'seagreen'
    }
    else if(seconds == 20){
        body.style.background = '#42A5F8'
    }
    else if(seconds == 25){
        body.style.background = '#722357'
    }
    else if(seconds == 30){
        body.style.background = '#482A2A'
    }
    else if(seconds == 35){
        body.style.background = '#CF484C'
    }
    else if(seconds == 40){
        body.style.background = 'red'
    }
    else if(seconds == 45){
        body.style.background = 'orange'
    }
    else if(seconds == 50){
        body.style.background = 'yellow'
    }
    else if(seconds == 55){
        body.style.background = 'gray'
    }
    else if(seconds == 60){
        body.style.background = 'lightgray'
    }
}

// function colorChanger(){
//     //red++
//
//     if (red === 0) {
//         redIncrease = true
//     }
//     else if (red === 255) {
//         redIncrease = false
//     }
//
//     if (redIncrease) {
//         red--
//     }
//     else {
//         red++
//     }
//
//     if (green === 0) {
//         greenIncrease = true
//     }
//     else if (green === 255) {
//         greenIncrease = false
//     }
//
//     if (greenIncrease) {
//         green++
//     }
//     else {
//         green--
//     }
//
//     if (blue === 0) {
//         blueIncrease = true
//     }
//     else if (blue === 255) {
//         blueIncrease = false
//     }
//
//     if (blueIncrease) {
//         blue--
//     }
//     else {
//         blue++
//     }
//
//     // if(red === 255){
//     //     red = 0
//     //     green++
//     // }
//     // else if(green === 255){
//     //     green = 0
//     //     blue++
//     // }
//     // else if(blue === 255){
//     //     blue = 0
//     // }
//
//     body.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'
//     console.log(red,green,blue)
// }


function animationLoop(){
    var circle = document.querySelector('.outer-circle')
    var width = Number(getComputedStyle(circle).width.replace('px',''))
    var height = Number(getComputedStyle(circle).height.replace('px',''))

    if(width === 500 && height === 500 ){
        width ++
        height ++
    }
    else if( width === 600 && height === 600){
        width = 500
        height = 500
    }
    circle.style.width = width + 1 + 'px'
    circle.style.height = height + 1 + 'px'
    animationId = requestAnimationFrame(animationLoop)
}
