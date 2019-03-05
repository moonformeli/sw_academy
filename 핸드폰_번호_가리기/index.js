function solution(n) {
    return n.replace(/\d+(?=\d{4}$)/, str => '*'.repeat(str.length));
}
