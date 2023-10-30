function updateCountdown(targetDate, timerContainerClass) {
   if (isNaN(targetDate)) {
        console.warn("Invalid targetDate:", targetDate);
       const divs = document.querySelectorAll("." + timerContainerClass);
       divs.forEach(function (div) {
            div.style.display = "none"
        });
        clearInterval(window[timerContainerClass]);
        return;
    }
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        const divs = document.querySelectorAll("." + timerContainerClass);
        divs.forEach(function (div) {
            div.innerHTML = '<div class="time-box">sell is end 😥 better luck next time</div>';
        });
        clearInterval(window[timerContainerClass]);
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);
    const d = days;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;
    const divs = document.querySelectorAll("." + timerContainerClass);
    divs.forEach(function (div) {
        div.innerHTML =
            '<div class="time-box"><span class="box">' + d + '</span><span class="text_count">Days</span></div>' +
            '<div class="time-box"><span class="box">' + h + '</span><span class="text_count">Hours</span></div>' +
            '<div class="time-box"><span class="box">' + m + '</span><span class="text_count">mins</span></div>' +
            '<div class="time-box"><span class="box">' + s + '</span><span class="text_count">sec</span></div>';
    });
}
const targetDate1 = Date.parse('2023-10-26 11:19');
const timerContainerClass1 = "time-counter";
const targetDate2 = Date.parse('2023-09-26 19:00');
const timerContainerClass2 = "time-counter-two";
const targetDate3 = Date.parse('09-26-2023 13:00');
const timerContainerClass3 = "time-counter-three";
window[timerContainerClass1] = setInterval(function () {
    updateCountdown(targetDate1, timerContainerClass1);
}, 1000);
window[timerContainerClass2] = setInterval(function () {
    updateCountdown(targetDate2, timerContainerClass2);
}, 1000);
window[timerContainerClass3] = setInterval(function () {
    updateCountdown(targetDate3, timerContainerClass3);
}, 1000);
