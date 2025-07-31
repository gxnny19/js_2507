for (let i = 1; i <= 9; i++) {
    document.writeln(`<h3>${i}단</h3>`);
    for (let j = 1; j <= 9; j++) {
        document.writeln(`${i} X ${i} = ${i * j} <br>`);
    }
}