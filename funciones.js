document.getElementById('modoNocturno').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.getElementById('contenido').style.color = "#fff";
    document.getElementById('contenido1').style.color = "#fff";
    document.getElementById('contenido2').style.color = "#fff";
})
document.getElementById('modoNormal').addEventListener('click', function() {
    document.body.style.backgroundColor = '#FBE7C4'
    document.body.style.color = 'black';
    document.getElementById('contenido').style.color = "black";
    document.getElementById('contenido1').style.color = "black";
    document.getElementById('contenido2').style.color = "black";
})