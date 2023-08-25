function exibirNotificacao() {
    let options = {
        body: "Esse sistema de notificação foi feito com javascript 😅.",
        icon: "https://th.bing.com/th/id/R.1249492264f909cc540ddc8e87419e42?rik=YgSINlEYXUsLjA&pid=ImgRaw&r=0"
    };

    let notificacao = new Notification("Notificação com javascript", options);

    notificacao.onclick = function () {
        notificacao.close();
    };

    setTimeout(function () {
        window.open("https://developer.mozilla.org/pt-BR/docs/Web/JavaScript");
        notificacao.close();
    }, 5000);
}

setTimeout(function () {
    if (Notification.permission === "granted") {
        exibirNotificacao();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                exibirNotificacao();
            }
        });
    }
}, 1000);