function solution(n) {
    const pattern = {true: '수', false: '박'};
    let bool = false;
    return [...new Array(n)].map(_ => {
        bool = !bool;
        return pattern[bool];
    }).join('');
}
