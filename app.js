function chargebattery(){
    var a;
    a = document.getElementById("charging");
    a.innerHTML = "&#xf244";
    setTimeout(() => {
        a.innerHTML = "&#xf243";
    }, 1000);
    setTimeout(() => {
        a.innerHTML = "&#xf242";
    }, 2000);
    setTimeout(() => {
        a.innerHTML = "&#xf241";
    }, 3000);
    setTimeout(() => {
        a.innerHTML = "&#xf240";
    }, 4000);
}
chargebattery();
setInterval(chargebattery,5000);