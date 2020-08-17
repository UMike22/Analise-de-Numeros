let num = document.getElementById('num')
let res = document.getElementById('res')
let adclista = document.getElementById('adcarr')
let vetores = []
function isNum(n){
if(Number(n) >= 1 && Number(n) <= 100){
return true
} else {
    return false
}

}
  function IsLista(n,l){
     if(l.indexOf(Number(n)) != -1){
        return true
     }else{
         return false
     }

 }
function adcnum(){
     
  if(isNum(num.value)&& !IsLista(num.value, vetores)){
    vetores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor Adicionado é ${num.value}`
    adclista.appendChild(item)
    res.innerHTML = ''

  }else{
      window.alert('Valor invalido ou já encontrado na lista')
  } num.value = ''
  num.focus()


}
function finalizar(){
    if(vetores.length == 0){
        window.alert('Digite valores !')
    }
    

    else {
        let tot = vetores.length
        let maior = vetores[0]
        let menor  =  vetores[0]
        let soma = 0
        let  media = 0
        for(let pos in vetores){
        soma  += vetores[pos]
        if(vetores[pos] > maior)
        maior = vetores[pos]        
            if(vetores[pos] < menor){
                menor = vetores[pos]
            }
    
    }   media = soma / vetores.length
        
        
        res.innerHTML = `<p>A Quantidade de itens adicionados foi de ${tot} Numeros</p>` 
        res.innerHTML += `<p>O Menor Número adicionado foi o  ${menor}</p>`
        res.innerHTML += `<p> O Maior Número adicionado foi o ${maior}</p>`
        res.innerHTML+= `<p>A soma de Todos os números é ${soma}</p>`
        res.innerHTML += `<p>A media é ${media.toFixed(2)}</p>`
         
    } 
}


