function solution(x, n) {
    return [...new Array(n).fill(x).map((x, i) => x * (i + 1))];
}
