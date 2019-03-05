function solution(num) {
    const n = Math.sqrt(num);
    return n % Math.floor(n) === 0 ? Math.pow(n + 1, 2) : -1;
}
