function verificar(){
	var h = new Date()
	var hoje = h.getFullYear()
	var res = document.getElementById('resp')
	var img = document.querySelector('div#img > img')
	var nasc = document.getElementById('idnasc').value
	if(nasc.length == '' || nasc >= hoje){
		window.alert('Erro, verifique os dados e tente novamente!')
	}else{
		var anonasc = Number(nasc)
		var sexo = document.getElementsByName('sexo')
		var genero = ''
		idade = hoje - anonasc
		if(sexo[0].checked){
			var genero = 'masculino'
			if(idade <=10){
				img.src = 'imagens/criança_m.jpg'
				res.innerText = `Você é um menino com ${idade} anos de idade!`
			}else if(idade < 20){
				img.src = 'imagens/jovem_m.jpg'
				res.innerText = `Você é um adolescente com ${idade} anos de idade!`
			}else if(idade <= 60){
				img.src = 'imagens/adulta_m.jpg'
				res.innerText = `Você é um homem adulto com ${idade} anos de idade!`
			}else{
				img.src = 'imagens/idosa_m.jpg'
				res.innerText = `Você é um homem idoso com ${idade} anos de idade!`
			}
		}else if(sexo[1].checked){
			var genero = 'feminino'
			if(idade <=10){
				img.src = 'imagens/criança_f.jpg'
				res.innerText = `Você é uma menina com ${idade} anos de idade!`
			}else if(idade < 20){
				img.src = 'imagens/jovem_f.jpg'
				res.innerText = `Você é uma adolescente com ${idade} anos de idade!`
			}else if(idade <= 60){
				img.src = 'imagens/adulta_f.jpg'
				res.innerText = `Você é uma mulher adulta com ${idade} anos de idade!`
			}else{
				img.src = 'imagens/idosa_f.jpg'
				res.innerText = `Você é uma mulher idosa com ${idade} anos de idade!`
			}
		}
	}
}