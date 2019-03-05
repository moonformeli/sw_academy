function solution(arr) {
    const min = arr.reduce((min, cur) => Math.min(min, cur));
    const res = arr.filter(n => n !== min);
    return res.length ? res : [-1];
}
