let numero = 10;

for (let i = numero - 1; i >= 1; i--) {
  numero = numero * i;
  console.log(numero);
}

let i = numero - 1;

while (i <= 1) {
  numero = numero * i;
  console.log(numero);

  i--;
}
let num = 10;
let j = num - 1;

while (j >= 1) {
  num = num * j;
  console.log(num);

  j--;
  if (num == 5040) {
    break;
  }
}
