function gerar(){
var numero =  document.getElementById('numero')

var tabuada = document.getElementById('tabuada')

    if(numero.value.length == 0) { 
     window.alert('Por favor Digite um numero valido!')
    }



else { 
    var num = Number(numero.value)
    var c = 1
    tabuada.innerHTML = ''
    while(c <=10){
        var item_adicionado = document.createElement('option')
        item_adicionado.innerText = `${num} X ${c} = ${num*c}`
        tabuada.appendChild(item_adicionado)
        c++
    }
}


}