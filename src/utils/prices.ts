export function removeComma(value) {
    return Math.trunc(Number(value))
}

export function someAllPrice(arrayToSome) {
    let allPrice = 0;
    arrayToSome.forEach(element => {
        allPrice += (element.price * element.amount);
    });
    return allPrice;
}