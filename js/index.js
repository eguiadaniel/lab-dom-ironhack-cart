// ITERATION 1

let totalSum = 0;

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const value = price.innerHTML;
  const units = quantity.value;

  const subtotalCalc = value * units;
  console.log(subtotalCalc);

  const subTotal = product.querySelector(`.subtotal`);
  console.dir(subTotal);

  totalSum += subtotalCalc;

  return (subTotal.innerHTML = `<span>${subtotalCalc}</span>`);
}


function calculateAll() {
  const trCollection = document.getElementsByClassName('product');
  console.dir(trCollection);
 
  for (let i = 0; i < trCollection.length; i++) {
    updateSubtotal(trCollection[i]);
  }
  
  const targetTotal = document.getElementById('total-value');
  console.dir(targetTotal);

  targetTotal.innerHTML = `Total $<span>${totalSum}</span>`;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
