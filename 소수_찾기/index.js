function solution(n) {
    const primes = [-1, -1, ...new Array(n - 1)];
    let res = 0;
    for (let i = 2; i <= n; i += 1) {
        if (primes[i] === 1) continue;
        res += 1;
        for (let j = i; i * j <= n; j += 1) {
            primes[j * i] = 1;
        }
    }
    return res;
}
