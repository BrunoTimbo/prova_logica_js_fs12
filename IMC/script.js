function calcularIMC(){

    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value

    console.log(altura)
    console.log(peso)

    let imc = (Math.pow(peso, 2)) / altura

    console.log(imc)

    if(imc < 18.5){

        document.getElementsByTagName('p')[0].innerHTML = 'Seu IMC é ' + imc.toFixed(2).replace('.', ',') + '.' + ' Você está abaixo do peso.'

    } else if (imc >= 18.5 && imc < 25){

        document.getElementsByTagName('p')[0].innerHTML = 'Seu IMC é ' + imc.toFixed(2).replace('.', ',') + '.' + ' Você está com o peso normal.'


    } else if (imc >= 25 && imc < 30){

        document.getElementsByTagName('p')[0].innerHTML = 'Seu IMC é ' + imc.toFixed(2).replace('.', ',') + '.' + ' Você está com sobrepeso'

        
    } else if (imc >= 30 && imc < 35){

        document.getElementsByTagName('p')[0].innerHTML = 'Seu IMC é ' + imc.toFixed(2).replace('.', ',') + '.' + ' Você está com obesidade grau I.'
        
    } else if (imc >= 35 && imc <= 40){

        document.getElementsByTagName('p')[0].innerHTML = 'Seu IMC é ' + imc.toFixed(2).replace('.', ',') + '.' + ' Você está com obesidade grau II.'

    } else {

        document.getElementsByTagName('p')[0].innerHTML = 'Seu IMC é ' + imc.toFixed(2).replace('.', ',') + '.' + ' Você está com obesidade grau III.'

    }


}