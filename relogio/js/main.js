function updateTime() {
    let day = new Date()
    let hour = day.getHours()
    let minutes = day.getMinutes()
    let seconds = day.getSeconds()

    
    const hr = document.querySelector('.hour-hand');
    const min = document.querySelector('.minute-hand');
    const sec = document.querySelector('.second-hand');

    let hrrotation = (30 * hour) + (0.5 * minutes);
    let minrotation = 6 * minutes;
    let secrotation = 6 * seconds;
  



    const digitalHour = document.querySelector('.digital-hour');
    const digitalMinutes = document.querySelector('.digital-minutes');
    const digitalSeconds = document.querySelector('.digital-seconds');


    digitalHour.innerHTML = hour;
    digitalMinutes.innerHTML = minutes;
    digitalSeconds.innerHTML = seconds;

    hr.style.transform =
        `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =
        `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform =
        `translate(-50%,-85%) rotate(${secrotation}deg)`
 
}
  
setInterval(updateTime, 1000);