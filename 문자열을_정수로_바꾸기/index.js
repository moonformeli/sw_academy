function solution(s) {
    return s[0] !== '-' ? parseInt(s) : -parseInt(s.substr(1));
}
