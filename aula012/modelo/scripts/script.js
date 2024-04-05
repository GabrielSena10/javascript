function carregar(){
	var dia = new Date()
	var h = dia.getHours()
	h = 18
	var horas = document.querySelector('div#hora > p')
	var img = document.querySelector('div#img > img')
	if(h > 0 & h < 12){
		horas.innerText = `Bom dia, são ${h}h!`
		img.src = 'imagens/manha.jpg'
	}else if(h < 18){
		horas.innerText = `Boa tarde, são ${h}h!`
		img.src = 'imagens/tarde.jpg'
	}else{
		horas.innerText = `Boa noite, são ${h}h!`
		img.src = 'imagens/noite.jpg'
	}
}