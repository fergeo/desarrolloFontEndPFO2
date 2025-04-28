const fechaObjetivo = new Date("2025-05-05T00:00:00").getTime();

const temporizador = setInterval(function() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    if (diferencia < 0) {
        clearInterval(temporizador);
        document.getElementById("contador").innerHTML = "¡Tiempo terminado!";
    }
}, 1000);