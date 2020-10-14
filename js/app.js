
function search() {
  var inputData = document.getElementById("search-input").value;
  
  window.location.href = "./search.html?query=" + inputData;
}

async function selected() {
  const acoesPrinci = document.querySelectorAll("#index-selection button");
  for (i in acoesPrinci ) {
    /* ((acoesPrinci[i].innerText != this.document.activeElement.innerText) */
    if (acoesPrinci[i].classList == "selected") {
      acoesPrinci[i].classList.remove("selected")
    } 
  }
  this.document.activeElement.classList.add("selected");
}

async function selectedPeriodo() {
  const indexados = document.querySelectorAll("#indexes .time-selection button");
  for (i in indexados) {
    if (indexados[i].classList == "selected") {
      indexados[i].classList.remove("selected")
    }
    
  }

  this.document.activeElement.classList.add("selected");

  var primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');


              
  var chart = new Chart(primeiroGrafico, {
      type: 'line',
      

      data: {
          labels: ['13/10', '12/10', '11/10', '10/10', '9/10'],

          datasets: [{
                  label: '',
                  data: [, 1600000, 178276128, 180619108, 182911487],
                  backgroundColor: "rgba(255, 34, 0, 0.3)",
                  borderColor: "#0000ff",
                  lineTension: 0
              },
              
          ]
      }

  });
}



function favoritar() {
  let favoritos = JSON.parse(localStorage.getItem("favoritados")) || []
  
  const salvar = this.document.activeElement.parentElement.parentElement.id;
  
  const favoritador = this.document.activeElement.childNodes[0];

  const index = favoritos.indexOf(salvar);
  const existeLocal = index != -1;

  if (existeLocal) {
      favoritos.splice(index, 1);
      favoritador.removeAttribute("style");
  } else {
      favoritos.push(salvar);
      favoritador.style = "color: var(--pink)";
  }
  
  localStorage.setItem("favoritados", JSON.stringify(favoritos));
  console.log(localStorage.getItem("favoritados"))



}