function solution(x) {
    return !(x % [...`${x}`].reduce((sum, cur) => sum += +cur, 0));
}
