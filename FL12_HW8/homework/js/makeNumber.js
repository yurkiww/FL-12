function makeNumber(str) {
    str = str.replace(/[^0-9]/gim, '');
    return str;
}
console.log(makeNumber('asda1221--sdasd'))