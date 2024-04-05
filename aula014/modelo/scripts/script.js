function contar(){
	var i = document.getElementById('idinicio').value
	var f = document.getElementById('idfim').value
	var p = document.getElementById('idpasso').value
	var res = document.querySelector('section > p')
	var inicio = Number(i)
	var fim = Number(f)
	var passo = Number(p)
	if (inicio == ''){
		window.alert('Impossível contar, adicione um número de início!')
	}else if (fim == ''){
		window.alert('Impossível contar, adicione um número de fim!')
	}
	if (inicio != '' & fim != ''){
		if (passo == ''){
			window.alert('Passo não informado, utilizando passo de 1!')
			var passo = 1
		}
		var c = inicio
		res.innerText = `Contando:`
		if (inicio <= fim){
			while(c <= fim){
				res.innerText += ` ${c} `
				c += passo
				if (c <= fim){
					res.innerHTML += `\u{1F449}`
				}
			}
		}else{
			while(c >= fim){
				res.innerText += ` ${c} `
				c -= passo
				if (c >= fim){
					res.innerHTML += `\u{1F449}`
				}
			}
		}
		res.innerText += `\u{1F3C1} Contagem finalizada!`
	}
}