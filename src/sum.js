exports.sum = (first, second) => {
    return first + second
}

exports.sumAll = (numbers) => {
    let total = 0
    for(let number of numbers){
        total += number
    }
    return total;
}