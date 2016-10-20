// var name = 'Christy'
//
// function runsLater(){
//     alert(name)
// }
//
// //timers
// var firstTimeout = setTimeout(runsLater, 5000)  // (function, 1000 miliseconds per second)
//
// //another way of doing this is to run an annonymous function \. You can use setTimeout for multiple times for funtions. This function will come second even though it has the same seconds because of sequence in javascript. added the variables after u can run withou them
// var secondTimeout  = setTimeout(function(){
//     alert('this comes later.')
// }, 5000)
//
// console.log(firstTimeout)
// console.log(secondTimeout)
// clearTimeout(firstTimeout)  //this function is built in and clears the timeout if you need later on. Pulls it out of queue

// var actionTimer  //made variable outside of our scope so its available globally
// var counter = 0
// //
// // document.getElementById('action').addEventListener('click', function(){
// //     counter++
// //     this.innerHTML = counter  ///this refers to the current button being clicked on.
// //
// //     clearTimeout(actionTimer)  //this constantly resetting the timer if go is pressed
// //
// //     actionTimer= setTimeout(() => {
// //     this.innerHTML = '0'
// //     counter = 0
// //     console.log('Happened once.')
// // },2000)
// // })
//
// // setInterval() //runs something every second
//
// var counter = 0
// function doThis(){
//     counter++
//     console.log(counter)
// }
//
// var timer
// function start(){
//     timer = setInterval(doThis, 1000)
// }
//
// document.getElementById('action').addEventListener('click', function(){
//     clearInterval(timer)  ///clears the interval function
//     if (this.innerHTML === 'Paused'){
//         start()
//         this.innerHTML = 'Pause'
//     }
//     else{
//         this.innerHTML = 'Paused'
//     }
// })
//
// start()


// setTimeout and interval are accurate for shorter periods of time but the longer it goes on it can get slight differences in timming.
// they introduced animation framework to be really accurate. Mostly used in gaming

// var animationId  //made a global variable outside of the scope because we will keep recalling this in our function
// function animationLoop(){
//     var button = document.getElementById('action')
//     var top = Number(getComputedStyle(button).top.replace('px','')) // getComputedStyle is used to check the
//     if(top >= 600){ //used if statement to bring the button back up top once it reaches 600 position.
//         top = 0
//     }
//     button.style.position = 'absolute'
//     button.style.top = top + 1 + 'px'
//
//     animationId = requestAnimationFrame(animationLoop)  //we set the aniID to the built in function requestAnimationFrame which is set to 60fps which will then run the function animationLoop. This is a special thing that recognizes that its for gaming and it lets you keep looping.
// }
// animationLoop()




var animationId  //made a global variable outside of the scope because we will keep recalling this in our function
function animationLoop(){
    var circle = document.querySelector('.box')
    var width = Number(getComputedStyle(circle).width.replace('px',''))
    var height = Number(getComputedStyle(circle).height.replace('px',''))

    if(width >= 600 && height >=600 ){
        width = 200;
        height = 200;
    }
    circle.style.width = width + 1 + 'px'
    circle.style.height = height + 1 + 'px'
    animationId = requestAnimationFrame(animationLoop)  //we set the aniID to the built in function requestAnimationFrame which is set to 60fps which will then run the function animationLoop. This is a special thing that recognizes that its for gaming and it lets you keep looping.
}
animationLoop()


// var animationId  //made a global variable outside of the scope because we will keep recalling this in our function
// var circle = document.querySelector('.box')
// function animationLoop(){
//     var circle = document.querySelector('.box')
//     var padding = getComputedStyle(circle).padding
//     console.log(padding)
//
//     if(padding >= 600){
//         padding = 200;
//     }
//     circle.style.padding = 200
//     circle.style.padding = padding + 1
//     animationId = requestAnimationFrame(animationLoop)  //we set the aniID to the built in function requestAnimationFrame which is set to 60fps which will then run the function animationLoop. This is a special thing that recognizes that its for gaming and it lets you keep looping.
// }
// animationLoop()
