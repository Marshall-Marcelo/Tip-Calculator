const bill_input = document.getElementById("bill");
const person_input = document.getElementById("person");
const tip_input = document.getElementById("custom-tip");
const tip_grid = document.getElementById("tip-grid");
const tip_buttons = tip_grid.querySelectorAll("button");
const tip_person = document.getElementById("tip-person");
const total_person = document.getElementById("total-person");
let tip_value = 0;
let bill_value = 0;
let people_value = 0;

bill_input.addEventListener("keyup", (e) => {
  bill_value = getValue(e);
  setResult();
});

person_input.addEventListener("keyup", (e) => {
  people_value = getValue(e);
  setResult();
});

tip_input.addEventListener("keyup", (e) => {
  tip_value = getValue(e) / 100;
  setResult();
});

tip_buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tip_value = getValue(e) / 100;
    setResult();
  });
});

const getValue = (select) => {
  return parseFloat(select.target.value);
};

const calculateTip = (bill, tip, people) => {
  let result = {
    tip: 0,
    total: 0,
  };

  if (!bill || !tip || !people) {
    return result;
  }

  let tip_amount_raw = (bill * tip) / people;
  let tip_amount = parseFloat(tip_amount_raw.toFixed(2));
  let total_amount_raw = bill / people + tip_amount;
  let total_amount = parseFloat(total_amount_raw.toFixed(2));

  result = {
    tip: tip_amount,
    total: total_amount,
  };

  return result;
};

const setResult = () => {
  let result = calculateTip(bill_value, tip_value, people_value);
  tip_person.textContent = result.tip;
  total_person.textContent = result.total;
};
