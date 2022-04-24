
/* Mostra os valores no visor */
function preencher(valor) {
    document.getElementById('visor').value += valor;
    
        }
function calcular() {
    var resultado = 0;
             resultado = document.getElementById('visor').value;
             
             document.getElementById('visor').value = eval(resultado);
}     

function limpar(){
  
  document.getElementById('visor').value = "";
}

function apagar(){
  var input = document.getElementById('visor');
  var inputText = input.value;
  input.value = inputText.substring(0,inputText.length-1);
}