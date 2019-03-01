function solution(n) {
    return [...new Array(n + 1).fill(0)].map((_, i) => {
        if (n % i === 0) return i;
        return 0;
    }).reduce((acc, cur) => acc += cur);
}
