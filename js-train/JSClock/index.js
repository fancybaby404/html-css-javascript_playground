function startTime() {
    // getTime 
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // clock 
    const secondHand = document.querySelector('.second-hand')
    const minuteHand = document.querySelector('.minute-hand')
    const hourHand = document.querySelector('.hour-hand')

    secondDegrees = ((s / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`

    minuteDegrees = ((m / 60) * 360) + ((s / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    hourDegrees = ((h / 12) * 360) + ((m / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(startTime, 1000);
document.onload = startTime()