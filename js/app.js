async function selected() {
  const acoesPrinci = document.querySelectorAll("#index-selection button");
  for (i in acoesPrinci) {
    /* ((acoesPrinci[i].innerText != this.document.activeElement.innerText) */
    if (acoesPrinci[i].classList == "selected") {
      acoesPrinci[i].classList.remove("selected");
    }
  }
  this.document.activeElement.classList.add("selected");
}

async function selectedPeriodo() {
  const indexados = document.querySelectorAll(
    "#indexes .time-selection button"
  );
  /* const atual = this.document.activeElement; */

  for (i in indexados) {
    /* Não permite fazer isso, não sei por que. Dá erro Uncaught (in promise) TypeError: Cannot read property 'remove' of undefined
    if (indexados[i] != atual) {
      indexados[i].classList.remove("selected")
    } */
    console.log(indexados[i]);

    if (indexados[i].classList == "selected") {
      indexados[i].classList.remove("selected");
    }
  }

  this.document.activeElement.classList.add("selected");

  var primeiroGrafico = document
    .getElementById("primeiroGrafico")
    .getContext("2d");

  var chart = new Chart(primeiroGrafico, {
    type: "line",

    data: {
      labels: ["13/10", "12/10", "11/10", "10/10", "9/10"],

      datasets: [
        {
          label: "",
          data: [, 1600000, 178276128, 180619108, 182911487],
          backgroundColor: "rgba(255, 34, 0, 0.3)",
          borderColor: "#0000ff",
          lineTension: 0,
        },
      ],
    },
  });
}

function formataNumero(n) {
  n = n.replace('R$ ', '');
  if (n === "") {
      n = 0;
  } else {
      n = n.replace(".", "");
      n = n.replace(",", ".");
  }
  return n;
}

function porcentagem(n) {
  n = n.replace(',', '.');
  n = n.replace('%', '')
  return n;
}

async function selectedPeriodo2() {
  const pegandoID = this.document.activeElement.parentElement.parentElement
    .parentElement.id;
  
  console.log(this);
  const indexados = document.querySelectorAll(
    `#${pegandoID} .third-line .time-selection button`
  );

  for (i in indexados) {
    if (indexados[i].classList == "selected") {
      indexados[i].classList.remove("selected");
    }
  }

  this.document.activeElement.classList.add("selected");
  const botaoAtual = this.document.activeElement.innerText;

  
  const url = `https://sheet.best/api/sheets/326958cd-35bc-41a7-b0c2-57cbce2e8ed8/COD/*${pegandoID}*`;
  const response = await fetch(url);
  const result = await response.json();

  if (botaoAtual == "1D") {
    for (const r of result) {
      var variation = r.VARIACAO;
      variation = porcentagem(variation);
      variation = variation/100;
      var preco6 = r.HOJE;
      preco6 = formataNumero(preco6);
      var preco1 = preco6/(1 + variation)
      var preco2 = preco6/(1 + (variation * 0.8));
      var preco3 = preco6/(1 + (variation * 0.6));
      var preco4 = preco6/(1 + (variation * 0.4));
      var preco5 = preco6/(1 + (variation * 0.2));

      var label1 = "Preço Inicial";
      var label2 = "";
      var label3 = "";
      var label4 = "";
      var label5 = "";
      var label6 = "Preço Final"

      var titulo1 = "Variação de Preço"
      
      
    }
  } else if (botaoAtual == "5D") {
    for (const r of result) {
      var preco6 = r.HOJE;
      preco6 = formataNumero(preco6);
      var preco1 = r.DIA5;
      preco1 = formataNumero(preco1);
      var preco2 = r.DIA4
      preco2 = formataNumero(preco2);
      var preco3 = r.DIA3
      preco3 = formataNumero(preco3);
      var preco4 = r.DIA2
      preco4 = formataNumero(preco4);
      var preco5 = r.DIA1
      preco5 = formataNumero(preco5);

      var label1 = "5 Dias";
      var label2 = "4 Dias";
      var label3 = "3 Dias";
      var label4 = "2 Dias";
      var label5 = "Ontem";
      var label6 = "Hoje"

      var titulo1 = "Semana"
    }

  } else if (botaoAtual == "1M") {
    for (const r of result) {
      var preco6 = r.HOJE;
      preco6 = formataNumero(preco6);
      var preco1 = r.DIA30;
      preco1 = formataNumero(preco1);
      var preco2 = r.DIA25
      preco2 = formataNumero(preco2);
      var preco3 = r.DIA20
      preco3 = formataNumero(preco3);
      var preco4 = r.DIA15
      preco4 = formataNumero(preco4);
      var preco5 = r.DIA10
      preco5 = formataNumero(preco5);

      var label1 = "30 Dias";
      var label2 = "25 Dias";
      var label3 = "20 Dias";
      var label4 = "15 Dias";
      var label5 = "10 Dias";
      var label6 = "Hoje"

      var titulo1 = "Mês"
    }
  } else if (botaoAtual == "6M") {
    for (const r of result) {
      var preco6 = r.HOJE;
      preco6 = formataNumero(preco6);
      var preco1 = r.DIA150;
      preco1 = formataNumero(preco1);
      var preco2 = r.DIA120
      preco2 = formataNumero(preco2);
      var preco3 = r.DIA90
      preco3 = formataNumero(preco3);
      var preco4 = r.DIA60
      preco4 = formataNumero(preco4);
      var preco5 = r.DIA30
      preco5 = formataNumero(preco5);

      var label1 = "150 Dias";
      var label2 = "120 Dias";
      var label3 = "90 Dias";
      var label4 = "60 Dias";
      var label5 = "30 Dias";
      var label6 = "Hoje"

      var titulo1 = "Semestre"
    }

  } else if (botaoAtual == "1A") {
    for (const r of result) {
      var preco6 = r.HOJE;
      preco6 = formataNumero(preco6);
      var preco1 = r.DIA360;
      preco1 = formataNumero(preco1);
      var preco2 = r.DIA270
      preco2 = formataNumero(preco2);
      var preco3 = r.DIA180
      preco3 = formataNumero(preco3);
      var preco4 = r.DIA120
      preco4 = formataNumero(preco4);
      var preco5 = r.DIA60
      preco5 = formataNumero(preco5);

      var label1 = "1 Ano";
      var label2 = "9 Meses";
      var label3 = "6 Meses";
      var label4 = "4 Meses";
      var label5 = "2 Meses";
      var label6 = "Hoje"

      var titulo1 = "Mês"
    }

  } else if (botaoAtual == "5A") {
    for (const r of result) {
      var preco6 = r.HOJE;
      preco6 = formataNumero(preco6);
      var preco1 = r.DIA10;
      preco1 = formataNumero(preco1);
      var preco2 = r.DIA15
      preco2 = formataNumero(preco2);
      var preco3 = r.DIA20
      preco3 = formataNumero(preco3);
      var preco4 = r.DIA25
      preco4 = formataNumero(preco4);
      var preco5 = r.DIA30
      preco5 = formataNumero(preco5);

      var label1 = "5 Anos";
      var label2 = "4 Anos";
      var label3 = "3 Anos";
      var label4 = "2 Anos";
      var label5 = "1 Ano";
      var label6 = "Hoje"

      var titulo1 = "Mês"
    }

  }

  var segundoGrafico = document
    .getElementById(`grafico${pegandoID}`)
    .getContext("2d");

  var chart = new Chart(segundoGrafico, {
    type: "line",

    data: {
      labels: [label1, label2, label3, label4, label5, label6],

      datasets: [
        {
          label: titulo1,
          data: [preco1, preco2, preco3, preco4, preco5, preco6],
          backgroundColor: "rgba(228, 85, 141, 0.6",
          borderColor: "#2f3035",
          lineTension: 0,
        },
      ],
    },
  });
}

function favoritar() {
  let favoritos = JSON.parse(localStorage.getItem("favoritados")) || [];

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
  console.log(localStorage.getItem("favoritados"));
}