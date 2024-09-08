const select = document.querySelector('#corFavorita') 
const corEscolhida = document.querySelector('#corEscolhida')

select.addEventListener ('change', (e) => {
    corEscolhida.textContent = select.value
    corEscolhida.style.color = select.value
    corEscolhida.style.fontWeight = '800'
    corEscolhida.style.fontSize = '40px'
})

//calculadora 

const operadorX = parseFloat(document.querySelector('.operadorX').value)
const operador= document.querySelector('#operador').value
const operadorY = parseFloat(document.querySelector('.operadorY').value)
const calcular = document.querySelector('#calcular')
const paragrafoResultado = document.querySelector('.resultado')

calcular.addEventListener('click', () => {
    switch(operador){
        case '+': 
            resultado = operadorX + operadorY
            break;
        case '-':
            resultado = operadorX - operadorY
            break;
        case '*':
            resultado = operadorX * operadorY
            break;
        case '/':
            resultado = operadorX / operadorY
            break;
    default: 
        console.log('Esse não é um operador válido')     
    }
    calcular.style.display = 'none'
    paragrafoResultado.innerHTML = `O resultado da sua conta é: ${resultado}`

})

