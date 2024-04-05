function gerar(){
	var n = document.getElementById('idnum').value
	var res = document.getElementById('seltab')
	if (n == ''){
		res.innerHTML = `<option>Digite um número acima!</option>`
		window.alert('Digite um número para gerar a tabuada!')
	}else{
		var num = Number(n)
		for (c = 0; c <= 10; c++){
			if(c ==1){
				res.innerHTML = ''
			}
			var opt = document.createElement('option')
			var resultado = num * c
			opt.text += `${num} x ${c} = ${resultado}`
			opt.value = `tab${c}`
			res.appendChild(opt)
		}
	}
}