const proverbios_data = [
	"vini vidi vinci",
	"yo en tu pa por si aca",
	"alla donde fueres haz lo que vieres",
	"quien la sigue la consigue",
	"no por mucho madrugar aparece más temprano"
	];
function muestra_proverbio_aleatorio(){
	const indiceAleatorio = Math.floor(Math.random() * proverbios_data.length);
	const proverbio_escogido = proverbios_data[indiceAleatorio];
    	document.getElementById('proverbio_parrafo').innerText = proverbio_escogido;
	}
window.onload = muestra_proverbio_aleatorio();

