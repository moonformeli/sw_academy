let cnt = 0;
function solution(num) {
    if (cnt > 500) return -1;
    if (num === 1) return cnt;
    cnt += 1;
    const _num = num % 2 ? num * 3 + 1 : num / 2;
    return solution(_num);
}
