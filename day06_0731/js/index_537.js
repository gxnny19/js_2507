// p537 for문 사용x
let sum = 0;

// sum += 1;
// sum += 2;
// sum += 3;
// sum += 4;
// sum += 5;
// document.writeln(`1부터 5까지 더하면 ${sum}`);

// p538 for문 사용o
// for (let i = 1; i < 6; i++) {
//     sum += i;
// }
// document.writeln(`1부터 5까지 더하면 ${sum}`);

// p539 1~1000까지 for문 사용
for (let i = 1; i < 1001; i++) {
    sum += i;
}
document.writeln(`1부터 1000까지 더하면 ${sum}`);