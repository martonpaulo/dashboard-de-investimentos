window.onload = function() {
  let localItems = localStorage.getItem("favoritados");
  // console.log(localItems);
  let parsedLocalItems = JSON.parse(localItems);
  // console.log(parsedLocalItems[0]);

  for (const i in parsedLocalItems) {
    addBox(parsedLocalItems[i]);
  }
}