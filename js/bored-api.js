function doSomething() {
    fetch('https://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('activity').innerText = data.activity;
        })
}
doSomething();

setInterval(() => {
    doSomething();
}, 10000);
