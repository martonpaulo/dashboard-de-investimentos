window.onload = (event) => {

  const queryString = window.location.search.replace('?query=','');;

  var pageTitle = document.getElementById("title");

  var h = document.createElement("H1");
  var t = document.createTextNode(`Resultados para "${queryString}"`);
  h.appendChild(t); 
  pageTitle.appendChild(h);

  addBox(queryString);

};

async function addBox (queryString) {

  const url = `https://sheet.best/api/sheets/326958cd-35bc-41a7-b0c2-57cbce2e8ed8/COD/*${queryString.toUpperCase()}*`;
	const response = await fetch(url);
  const result = await response.json();


  for (const r of result) {

    var box = document.createElement('div');
    box.className = 'box';

    let code = r.COD;
    let name = r.NOME;
    let price = r.HOJE;
    let variation = r.VARIACAO;

    if (name.length > 17) {
      name = name.substring(0, 18) + '...';
    }

    let variationColor;

    if (variation.substring(0, 1) == '-') {
      variationColor = 'low';
    } else {
      variation = '+' + variation;
      variationColor = 'high';
    }

    box.innerHTML = `
      <div class="first-line">
        <div class="code-and-name">
          <div class="stock-code"><p>${code}</p></div>
          <div class="stock-name"><p>${name}</p></div>
        </div>
        <button class="favorite"><ion-icon name="heart"></ion-icon></button>  
      </div>

      <div class="second-line">
        <div class="stock-price"><p>${price}</p></div>
        <div class="stock-variation ${variationColor}"><p>${variation}</p></div>
      </div>
      
      <div class="third-line">
        <div class="time-selection">
          <button class="selected">1D</button>
          <button>5D</button>
          <button>1M</button>
          <button>6M</button>
          <button>1A</button>
          <button>5A</button>
        </div>

        <div class="chart"></div>
      </div>
    `;

    document.getElementById('boxes').appendChild(box);
  }  
}