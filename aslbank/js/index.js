var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var respuesta = JSON.parse(xhttp.responseText);
        var personas = respuesta.personas;

        var salida = '';

        for (var i = 0; i < personas.length; i++) {
            salida += `<li>${personas[i].nombre} su nickname es ${personas[i].nickname}</li>`;
        }

        document.getElementById('llpersonas').innerHTML = salida;

    }
};
xhttp.open("GET", "personas.json", true);
xhttp.send();