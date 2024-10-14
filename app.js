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
    event.preventDefault();
    document.getElementById("error").hidden = true;
    document.getElementById("error").textContent = "Error invalid input"
    try {
        let F = document.getElementById("F").value;
    let S = document.getElementById("S").value;
    let P = document.getElementById("P").value;
    let res;
    console.log(F);
    console.log(S);
    console.log(P);
    if (F == "" && S == "" || F == "" && P == "" || S == "" && P == "") {
        document.getElementById("error").hidden = false;
        return;
    }

    if (F == "") {
        res = P*S;
        document.getElementById("F").value = res;
    }
    else if (S == "")
    {
        if (P == 0) {
            document.getElementById("error").textContent = "Nesmíš dělit nulou"
            document.getElementById("error").hidden = false;
        }
        else
        {
            res = F/P;
            document.getElementById("S").text = res;
        }
        
    }
    else
    {
        if (S == 0) {
            document.getElementById("error").textContent = "Nesmíš dělit nulou"
            document.getElementById("error").hidden = false;
        }
        else
        {
            res = F/S;
            document.getElementById("P").value = res;
        }
        
    }

    } catch (error) {
        document.getElementById("error").hidden = false;
    }
    
    
}