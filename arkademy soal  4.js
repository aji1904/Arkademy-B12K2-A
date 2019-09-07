const bersih = input => {
    let bersih = input.match(/[a-zA-Z0-9]/g).join('');
    bersih = bersih.split(/(?<=\\G.{3})/)
    console.log(bersih)
}

bersih('993141 -1 1323 14-232')