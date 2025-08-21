function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    if (de >= ate ) {
      alert ('Campo "do número" dever ser inferior ao campo "ate" verifique!');
      return;
    }

 for( let i = 0; i < quantidade; i++){

    numero = obtendoNumeroAleatorio(de, ate);

      while (sorteados.includes(numero)) {
      numero = obtendoNumeroAleatorio(de, ate);

      if (quantidade > (ate - de + 1)){
         alert('verifique os numeros')
         return;
      }
   
      }
    sorteados.push(numero);
 }
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`

  alterarbotaoreiniciar();

}
 function obtendoNumeroAleatorio(min, max){ 

 return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function alterarbotaoreiniciar () {
    
let botao = document.getElementById('btn-reiniciar');
 
if (botao.classList.contains('container__botao-desabilitado')){
   botao.classList.remove('container__botao-desabilitado');
   botao.classList.add('container__botao');
 } else {
 botao.classList.add('container__botao-desabilitado');
 botao.classList.remove('container__botao');
 }
 

 }
 function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarbotaoreiniciar();
 }
