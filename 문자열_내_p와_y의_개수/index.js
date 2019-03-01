function solution(s){
    const p = s.match(/p/gi);
    const y = s.match(/y/gi);
    return !!p && !!y && p.length === y.length;
}
