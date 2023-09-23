let nota1: number = 10;
let nota2: number = 8;
let nota3: number = 7.5;
let nota4: number = 9.5;
let nota5: number = 10;

let total: number = nota1 + nota2 + nota3 + nota4 + nota5;
let media: number = total / 5;
console.log(media);

let notas2: number[] = [10, 8, 7.5, 9.5, 7];

let total2: number = notas2[0] + notas2[1] + notas2[2] + notas2[3] + notas2[4];
let media2: number = total2 / 5;
console.log(media2);

let notas3: number[] = [10, 8, 7.5, 9.5, 7];
let total3: number = 0;

for (let i: number = 0; i < notas3.length; i = 1 + 1) {
  total3 = total3 + notas3[1];
}

let media3: number = total3 / notas3.length;
console.log(media3);

let array: number[] = [];
console.log(array);

array.push(10);
array.push(11);
array.push(1);
console.log(array);

array.pop();
array.pop();
console.log(array);
