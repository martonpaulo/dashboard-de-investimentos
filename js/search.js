function isEnterPressed (e) {
  if (e.keyCode === 13)
    search();
}

function search() {
  const inputData = document.getElementById("search-input").value;
  window.location.href = "./search.html?query=" + inputData;
}

// minha tentativa

pesquisa.addEventListener("input", event => {
  let nomePesquisado = setTimeout((e) => {
      const escondido = document.getElementsByClassName("esconder");
      /* por que não funcionou o this.value? */
      let valor = pesquisa.value;
      let reg = new RegExp(valor, "g");

      for(i in escondido) {
          const testeCinco = escondido[i].innerText
          const idSome = document.getElementById(escondido[i].innerText);
          if(testeCinco.match(reg)) {
              /* idSome.children.removeAttribute("style") */
              idSome.hidden = false;
          }else{
              /* idSome.style.display ="none" */
              idSome.hidden = true;
          }
              
      }
      
  }, 2000);

});