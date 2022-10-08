const timer = getElement('.two p')
let seconds = 0
let minutes = 0
    

function getElement(query){
    return document.querySelector(query)
}

function getElements(query){
    return document.querySelectorAll(query)
}

function twoDecimals(number){
    return number > 9 ? number : `0${number}`
}

function writeHtml(timer, seconds, minutes){
    const sec = twoDecimals(seconds)
    const min = twoDecimals(minutes)
    timer.innerText = `${min}:${sec}`
}

function run(){
   return  setInterval(() => {
        seconds++
        if(minutes === 60){
            seconds = 0
            minutes = 0
        }
        if(seconds === 60){
            seconds = 0
            minutes++
        }
        writeHtml(timer, seconds, minutes)
    },1000)
}

function reset(){
   seconds = 0
   minutes = 0
   writeHtml(timer, seconds, minutes)
}
