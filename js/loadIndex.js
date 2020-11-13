const upDownCodes = document.getElementsByClassName("stock-code");
const upDownVrt = document.getElementsByClassName("stock-variation");
const upDownValue = document.getElementsByClassName("stock-price");

console.log(upDownValue)

// get top and bottom 5

async function getHighsLows() {
    const url = "https://sheet.best/api/sheets/326958cd-35bc-41a7-b0c2-57cbce2e8ed8";
	const response = await fetch(url);
    const result = await response.json();

    console.log(result[12])

    let arrayCods = [];
    let arrayVrts = [];
    let arrayValues = [];

    let ix1 = 2;
    let ix2 = 2;
    let ix3 = 2;

    for (i of upDownCodes) {        
        arrayCods.push(i.children[0]);
    }

    for (i of upDownVrt) {        
        arrayVrts.push(i.children[0]);  
    }

    for (i of upDownValue) {        
        arrayValues.push(i.children[0]);  
    }
    
    for (i in arrayCods) {
        arrayCods[i].innerText = result[ix1].NOME;
        ix1++
    }

    for (i in arrayVrts) {
        arrayVrts[i].innerText = result[ix2].VARIACAO;
        ix2++
    }

    for (i in arrayValues) {
        arrayValues[i].innerText = result[ix3].HOJE;
        ix3++
    }
}

window.addEventListener("load", getHighsLows());
