function solution(arr, divisor) {
    const res = arr.filter(n => n % divisor === 0).sort((a, b) => a - b);
    return res.length ? res : [-1];
}
