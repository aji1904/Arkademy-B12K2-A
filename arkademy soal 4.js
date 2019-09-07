const groupNumber = input => {
    const result = String(input)
        .match(/[a-zA-Z0-9]/g)
        .join('')
        .split(/(.{3})/)
        .filter(res => res.length > 0)
    
    if (result[result.length - 1].length < 2) {
        result[result.length - 1] = result[result.length - 2].charAt(result[result.length - 2].length - 1) + result[result.length - 1]
        result[result.length - 2] = result[result.length - 2].slice(0, result[result.length - 2].length - 1)
    }
    
    return result.join('-')
}

console.log(groupNumber('993141 -1 1323 14-232'))