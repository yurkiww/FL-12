function countNumbers(str) {

    str = str.replace(/[^0-9]/gim, '');
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            console.log('gg')
        }
    }
    return str;
}
console.log(countNumbers('sdf-sdfs-df232332--'))