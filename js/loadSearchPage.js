// create page's title
window.onload = (event) => {

  const queryString = window.location.search.replace('?query=','');;

  const pageTitle = document.getElementById("title");

  const h = document.createElement("H1");
  const t = document.createTextNode(`Resultados para "${queryString}"`);
  h.appendChild(t); 
  pageTitle.appendChild(h);

  addBox(queryString);

};