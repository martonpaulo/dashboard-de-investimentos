function isEnterPressed (e) {
  if (e.keyCode === 13)
    search();
}

function search() {
  const inputData = document.getElementById("search-input").value;
  window.location.href = "./search.html?query=" + inputData;
}