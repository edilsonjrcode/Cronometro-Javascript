const timer = (second) => {
    const date = new Date(second * 1000);

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    })
}

//////////////// Components ////////////////

const hour = document.querySelector('#time')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const zero = document.querySelector('#zero')
const restart = document.querySelector('#restart')

let second = 0;
let time;

const startTimer = () => {
    time = setInterval(() => {
        second++
        hour.innerHTML = timer(second)
    }, 1000)
}

//////////////// Start ////////////////

start.addEventListener('click', startTimer)

//////////////// Pause ////////////////

pause.addEventListener('click', () => {
    clearInterval(time)
})

//////////////// Zero ////////////////

zero.addEventListener('click', () => {
    clearInterval(time)
    hour.innerHTML = '00:00:00'
    second = 0
})

//////////////// Restart ////////////////

restart.addEventListener('click', () => {
    second = -1
})
