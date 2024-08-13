const textoPrincipal = document.querySelector(".texto_ingresado");
const textoResultado = document.querySelector(".texto_resultado");


function encriptaCion() {
  const textoEncriptado = encriptar(textoPrincipal.value); 
  textoResultado.value = textoEncriptado; 
  textoResultado.style.backgroundImage = "none"
  vaciartexart();
}

function vaciartexart(){
  document.querySelector("#textoUsuario").value="";

}

function encriptar(stringEncritado) {
  let desencriPtacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "over"],
    ["u", "ufat"],
  ];

  stringEncritado = stringEncritado.toLowerCase(); 

  for (let i = 0; i < desencriPtacion.length; i++) {
    if (stringEncritado.includes(desencriPtacion[i][0])) {
      stringEncritado = stringEncritado.replaceAll(
        desencriPtacion[i][0],
        desencriPtacion[i][1]
      ); 
    }
  }

  return stringEncritado; 
}

function desencrptaCion() {
  const textoEncriptado = desencriptar(textoPrincipal.value); 
  textoResultado.value = textoEncriptado; 
  textoResultado.style.backgroundImage = "none"
  vaciartexart();
}


function desencriptar(stringdesencritado) {
  let desencriPtacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "over"],
    ["u", "ufat"],
    
  ];

  stringdesencritado = stringdesencritado.toLowerCase(); 

  for (let i = 0; i < desencriPtacion.length; i++) {
    if (stringdesencritado.includes(desencriPtacion[i][1])) { 
      stringdesencritado = stringdesencritado.replaceAll(
        desencriPtacion[i][1],
        desencriPtacion[i][0]
      ); 
    }
  }

  return stringdesencritado; 
}


function copiar(){

    let Textoalmacenado= document.querySelector(".texto_resultado").value;

    navigator.clipboard.writeText(Textoalmacenado)
    

}