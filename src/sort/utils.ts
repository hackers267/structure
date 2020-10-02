function exchange<T>(array: T[], i: number, j: number) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function less<T>(array: T[], i: number, j: number) {
    return array[i] < array[j];
}
export {
    less,
    exchange
}
