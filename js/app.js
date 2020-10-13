
function search() {
  var inputData = document.getElementById("search-input").value;
  
  window.location.href = "./search.html?query=" + inputData;
}
