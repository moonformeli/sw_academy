function solution(a, b) {
    let res = 0;
    let [_a, _b] = [a, b].sort((x, y) => x - y);
    for (let i = _a; i <= _b; i += 1) res += i;
    return res;
}
