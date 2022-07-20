// making object using variable

const date = "25.3.2022";
const name = "Akshy";

const obj = {
  date,
  name,
  reason: "random",
};
// iobject destructuring
const obj2 = {
  label: "red label",
  price: "Rs 230",
  stock: 500,
};
const { label, price: MRP } = obj2;

console.log(label);
console.log(MRP);

const transaction = (type, { label, price }) => {
  console.log(type, label, price);
};
transaction("order", obj2);
