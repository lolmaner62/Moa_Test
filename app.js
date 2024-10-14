if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function Vypocitej() {
    const F = document.getElementById("F").value;
    const S = document.getElementById("S").value;
    const P = document.getElementById("P").value;
    let res;
    res = F/S;
    P = res;
    console.log(res);
}