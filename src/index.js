import "./styles/style.scss";
import data from "./data.json";


//////////////////////////////////////
// main
//////////////////////////////////////
// to avoid global code
function main(data) {
  const chartGauges = document.getElementsByClassName('chart__filling');

  let i=0;
  let maxAmount=0;
  let indexMaxAmount=0;
  for (const gauge of chartGauges) {
    const infoBox = gauge.querySelector('.chart__hover-info');
    infoBox.textContent = data[i].amount;

    gauge.addEventListener('mouseenter', (ev) => {
      infoBox.classList.toggle('hidden');
    })

    gauge.addEventListener('mouseleave', (ev) => {
      infoBox.classList.toggle('hidden');
    })

    // compute max amount
    if (data[i].amount > maxAmount)  {
      maxAmount = data[i].amount;
      indexMaxAmount = i;
    }

    const height = computeHeight(data[i++].amount);
    console.log(height);
    gauge.style.height = `${height}px`;
  }

  // highlight max gouge
  chartGauges[indexMaxAmount].classList.add('chart__filling--max');
}
main(data);


//////////////////////////////////////
// functions
//////////////////////////////////////
function computeHeight(value) {
  const HEIGHT = 300;
  const percentage = 100;
  return (HEIGHT / percentage) * value
}

function toggleInfoBox(data) {
  infoBox.classList.toggle('hidden');
}