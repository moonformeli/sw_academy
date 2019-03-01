function solution(str) {
    const len = str.length;
    const s = len % 2 !== 0 ? Math.floor(len / 2) : len / 2 - 1;
    const e = len % 2 !== 0 ? 1 : 2;
    return str.substr(s, e);
}
