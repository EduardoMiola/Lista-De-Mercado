let alimentos = [];
let limpeza = [];
let higiene = [];
let outros = [];

/**
 * Adiciona um item na lista
 * @param item pega o valor do input
 * @param lista_de_itens adiciona o item na lista
 * @return limpa o input
 */
function adicionar() {
    let item = document.getElementById("item").value;
    let tipo = document.getElementById("tipo").value;
    switch (tipo) {
      case "alimento":
        alimentos.push(item);
        break;
      case "limpeza":
        limpeza.push(item);
        break;
      case "higiene":
        higiene.push(item);
        break;
      case "outros":
        outros.push(item);
        break;
      default:
        console.error("Tipo inválido");
    }

    document.getElementById("item").value = "";
}


/**
 * Limpa a lista
 * @param for percorre a lista
 * @param remove o primeiro filho da lista
 */
function limpar() {
    if(alimentos.length > 0){
      for (let i = 0; i < alimentos.length; i++) {
        document.getElementById("listaItem").remove();
      }
    }
    if(limpeza.length > 0){
      for (let i = 0; i < limpeza.length; i++) {
        document.getElementById("listaItem").remove();
      }
    }
    if(higiene.length > 0){
      for (let i = 0; i < higiene.length; i++) {
        document.getElementById("listaItem").remove();
      }
    }
    if(outros.length > 0){
      for (let i = 0; i < outros.length; i++) {
        document.getElementById("listaItem").remove();
      }
    }
    
    if (document.getElementsByClassName("tituloItem").length > 0) {
      for (let i = 0; i < document.getElementsByClassName("tituloItem").length; i++) {
        document.getElementsByClassName("tituloItem")[i].remove();
      }
    }
    

    alimentos = [];
    limpeza = [];
    higiene = [];
    outros = [];
}

/**
 * Mostra a lista
 * @param listaElemento pega o elemento da lista
 * @param for percorre a lista
 * @param itemElemento cria um elemento li
 * @param itemElemento.className adiciona uma classe
 * @param itemElemento.innerHTML adiciona o valor do item
 * @param listaElemento.appendChild adiciona o item na lista
 * @param document.getElementById("lista").style.display = "block" mostra a lista
 */
function showLista() {
    let listaElemento = document.getElementById("lista");

    if (alimentos.length !== 0) {
      let alimentoTitulo = document.createElement("h2");
      alimentoTitulo.innerHTML = "Alimentos";
      alimentoTitulo.className = "tituloItem";
      listaElemento.appendChild(alimentoTitulo);

      for (let i = 0; i < alimentos.length; i++) {
        let itemElemento = document.createElement("li");
        itemElemento.className = "listaItem";
        itemElemento.id = "listaItem";
        itemElemento.innerHTML = alimentos[i];
        listaElemento.appendChild(itemElemento);
      }
    }

    if (limpeza.length !== 0) {
      let limpezaTitulo = document.createElement("h2");
      limpezaTitulo.innerHTML = "Limpeza";
      limpezaTitulo.className = "tituloItem";
      listaElemento.appendChild(limpezaTitulo);

      for (let i = 0; i < limpeza.length; i++) {
        let itemElemento = document.createElement("li");
        itemElemento.className = "listaItem";
        itemElemento.id = "listaItem";
        itemElemento.innerHTML = limpeza[i];
        listaElemento.appendChild(itemElemento);
      }
    }
    
    if (higiene.length !== 0) {
      let higieneTitulo = document.createElement("h2");
      higieneTitulo.innerHTML = "Higiene";
      higieneTitulo.className = "tituloItem";
      listaElemento.appendChild(higieneTitulo);
    
      for (let i = 0; i < higiene.length; i++) {
        let itemElemento = document.createElement("li");
        itemElemento.className = "listaItem";
        itemElemento.id = "listaItem";
        itemElemento.innerHTML = higiene[i];
        listaElemento.appendChild(itemElemento);
      }
    }

    if (outros.length !== 0) {
      let outrosTitulo = document.createElement("h2");
      outrosTitulo.innerHTML = "Outros";
      outrosTitulo.className = "tituloItem";
      listaElemento.appendChild(outrosTitulo);

      for (let i = 0; i < outros.length; i++) {
        let itemElemento = document.createElement("li");
        itemElemento.className = "listaItem";
        itemElemento.id = "listaItem";
        itemElemento.innerHTML = outros[i];
        listaElemento.appendChild(itemElemento);
      }
    }

    document.getElementById("lista").style.display = "block";
  }
