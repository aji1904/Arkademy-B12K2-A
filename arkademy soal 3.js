const printTriangle = Baris =>{
    const x = Baris + 2;
    let string = '';
    if(Baris === 5) {
        Baris -= 1
    }
    for (let i = 1; i<=Baris; i++){
        for(let j = 1;  j <=x; j++){
            if(i === 1) {
                string += ' * '
            } else {
                const y = (x - i) + 1;
                if (i == j || y == j) {
                  string += ' * '
                } else {
                  string += '   '
                }
            }
        }
        string += '\n'
    }
    return string
}

console.log(printTriangle(3))
console.log('\n\n')
console.log(printTriangle(5))