function result() {
  let quantityValue = document.querySelector("#quantity").value;
  let colorValue = document.querySelector("#color").value;
  const priceValue = document.querySelector("#price").innerHTML;
  document.querySelector("#total-price").innerHTML = Number(quantityValue) * Number(priceValue);
  document.querySelector("#total-quantity").innerHTML = quantityValue;
  document.querySelector("#selected-color").style.backgroundColor = colorValue;
}
